// cart-module.js - Gedeelde cart functionaliteit voor alle pagina's met Firebase integratie
(function() {
    'use strict';
    
    // Cart configuration
    const CART_STORAGE_KEY = 'tech2wear_cart';
    const CART_COUNT_KEY = 'tech2wear_cartCount';
    const CART_INIT_KEY = 'tech2wear_initialized';
    
    // Firebase sync control
    let suppressRemoteSync = false;
    let isInitializing = false;
    
    // Euro currency formatter
    const currencyFormatter = new Intl.NumberFormat('nl-NL', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    
    // Initialize empty cart for new users
    if (!localStorage.getItem(CART_INIT_KEY)) {
        localStorage.setItem(CART_STORAGE_KEY, '[]');
        localStorage.setItem(CART_COUNT_KEY, '0');
        localStorage.setItem(CART_INIT_KEY, 'true');
    }
    
    // Cart utility functions
    function getCart() {
        try {
            return JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
        } catch (error) {
            console.warn('Error parsing cart data:', error);
            return [];
        }
    }
    
    async function saveCart(cart) {
        try {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
            updateCartCountDisplay(cart);
            
            // Dispatch custom event for cross-component communication
            try {
                window.dispatchEvent(new CustomEvent('cartUpdated', { 
                    detail: { cart, count: cart.length } 
                }));
            } catch (e) {
                // Fallback for older browsers
                console.log('Cart updated:', cart.length, 'items');
            }
            
            // 🔥 FIREBASE SYNC - Only if not suppressed and user is logged in
            if (!suppressRemoteSync && !isInitializing && window.TechCart && window.TechCart.currentUserId) {
                await saveUserCartToFirestore(window.TechCart.currentUserId, cart);
            }
        } catch (error) {
            console.warn('Error saving cart:', error);
        } finally {
            // Reset suppression flag after save
            suppressRemoteSync = false;
        }
    }
    
    function updateCartCountDisplay(cart = null) {
        if (!cart) cart = getCart();
        
        const count = cart.reduce((total, item) => total + (parseInt(item.quantity) || 0), 0);
        localStorage.setItem(CART_COUNT_KEY, count.toString());
        
        // Update alle .cart-count elementen (ondersteunt meerdere)
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(element => {
            element.textContent = count;
            
            // Bounce animation
            element.style.animation = 'bounce 0.6s ease';
            setTimeout(() => {
                element.style.animation = '';
            }, 600);
        });
    }
    
    function formatPrice(amount) {
        return currencyFormatter.format(parseFloat(amount) || 0);
    }
    
    function addToCart(product, quantity = 1) {
        if (!product || !product.id) {
            console.warn('Invalid product data');
            return false;
        }
        
        const cart = getCart();
        const existingItemIndex = cart.findIndex(item => item.id === product.id);
        
        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity += parseInt(quantity) || 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name || 'Product',
                price: parseFloat(product.price) || 0,
                originalPrice: product.originalPrice ? parseFloat(product.originalPrice) : null,
                image: product.image || 'images/placeholder.jpg',
                category: product.category || 'Elektronica',
                quantity: parseInt(quantity) || 1,
                addedAt: new Date().toISOString()
            });
        }
        
        saveCart(cart);
        showNotification(`${product.name || 'Product'} toegevoegd aan winkelwagen!`, 'success');
        return true;
    }
    
    function removeFromCart(productId) {
        const cart = getCart().filter(item => item.id !== productId);
        saveCart(cart);
        showNotification('Product verwijderd uit winkelwagen', 'info');
        return true;
    }
    
    function updateQuantity(productId, newQuantity) {
        const cart = getCart();
        const itemIndex = cart.findIndex(item => item.id === productId);
        
        if (itemIndex === -1) return false;
        
        const quantity = parseInt(newQuantity) || 0;
        if (quantity <= 0) {
            cart.splice(itemIndex, 1);
        } else {
            cart[itemIndex].quantity = quantity;
        }
        
        saveCart(cart);
        return true;
    }
    
    function clearCart() {
        localStorage.setItem(CART_STORAGE_KEY, '[]');
        localStorage.setItem(CART_COUNT_KEY, '0');
        updateCartCountDisplay([]);
        
        // Fire cart updated event
        try {
            window.dispatchEvent(new CustomEvent('cartUpdated', { 
                detail: { cart: [], count: 0 } 
            }));
        } catch (e) {
            console.log('Cart cleared');
        }
        
        // 🔥 FIREBASE SYNC
        if (window.TechCart && window.TechCart.currentUserId) {
            saveUserCartToFirestore(window.TechCart.currentUserId, []);
        }
        
        showNotification('Winkelwagen geleegd', 'info');
    }
    
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: ${type === 'success' ? '#00ff88' : type === 'warning' ? '#ff9500' : '#00ffff'};
            color: #0a0a0a;
            border-radius: 8px;
            font-weight: 600;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    // HELPER FUNCTIES
    function getCartCount() {
        return parseInt(localStorage.getItem(CART_COUNT_KEY) || '0');
    }
    
    function getCartTotal() {
        const cart = getCart();
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
    
    function isInCart(productId) {
        return getCart().some(item => item.id === productId);
    }
    
    function getItemQuantity(productId) {
        const item = getCart().find(item => item.id === productId);
        return item ? item.quantity : 0;
    }
    
    // 🔥 FIREBASE INTEGRATION FUNCTIONS
    
    // Check if Firebase is available and properly initialized
    function isFirebaseAvailable() {
        return typeof firebase !== 'undefined' && 
               firebase.firestore && 
               typeof db !== 'undefined';
    }
    
    // Load user cart from Firestore
    async function loadUserCartFromFirestore(userId) {
        if (!isFirebaseAvailable() || !userId) {
            console.log('📱 Firebase not available, using local cart');
            return;
        }
        
        try {
            isInitializing = true;
            console.log('🔄 Loading cart for user:', userId);
            
            const doc = await db.collection('carts').doc(userId).get();
            
            if (doc.exists) {
                const cartData = doc.data();
                const firebaseCart = Array.isArray(cartData.items) ? cartData.items : [];
                
                // Get current local cart
                const localCart = getCart();
                
                // Merge carts intelligently
                const mergedCart = mergeCartItems(localCart, firebaseCart);
                
                // Update local storage with merged cart (suppress remote sync)
                suppressRemoteSync = true;
                localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(mergedCart));
                updateCartCountDisplay(mergedCart);
                
                // If merge resulted in changes, save back to Firebase
                if (JSON.stringify(mergedCart) !== JSON.stringify(firebaseCart)) {
                    console.log('🔄 Saving merged cart back to Firebase');
                    await saveUserCartToFirestore(userId, mergedCart);
                }
                
                console.log(`✅ Loaded and merged cart: ${mergedCart.length} items`);
            } else {
                // No Firebase cart exists, migrate local cart if it has items
                const localCart = getCart();
                if (localCart.length > 0) {
                    console.log(`📤 Migrating ${localCart.length} local items to Firebase`);
                    await saveUserCartToFirestore(userId, localCart);
                }
            }
        } catch (error) {
            console.error('❌ Error loading user cart from Firebase:', error);
            
            // Don't show error for permission issues (might be offline)
            if (error.code !== 'permission-denied' && error.code !== 'unavailable') {
                showNotification('Kon winkelwagen niet synchroniseren', 'warning');
            }
        } finally {
            isInitializing = false;
            suppressRemoteSync = false;
        }
    }
    
    // Save user cart to Firestore
    async function saveUserCartToFirestore(userId, items = null) {
        if (!isFirebaseAvailable() || !userId || isInitializing) return;
        
        const cartItems = items || getCart();
        
        try {
            const cartData = {
                items: cartItems,
                itemCount: cartItems.reduce((total, item) => total + item.quantity, 0),
                totalValue: cartItems.reduce((total, item) => total + (item.price * item.quantity), 0),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
                version: 1
            };
            
            await db.collection('carts').doc(userId).set(cartData, { merge: true });
            console.log(`💾 Saved ${cartItems.length} items to Firebase`);
            
        } catch (error) {
            console.error('❌ Error saving cart to Firebase:', error);
            
            // Only show notification for unexpected errors
            if (error.code !== 'permission-denied' && 
                error.code !== 'unavailable' && 
                error.code !== 'unauthenticated') {
                showNotification('Kon winkelwagen niet synchroniseren', 'warning');
            }
        }
    }
    
    // Intelligently merge local and Firebase cart items
    function mergeCartItems(localCart, firebaseCart) {
        const merged = [...firebaseCart];
        
        localCart.forEach(localItem => {
            const existingIndex = merged.findIndex(item => item.id === localItem.id);
            
            if (existingIndex >= 0) {
                // Item exists in both carts - use most recent or higher quantity
                const existing = merged[existingIndex];
                const localTime = new Date(localItem.addedAt || 0).getTime();
                const existingTime = new Date(existing.addedAt || 0).getTime();
                
                // Use local item if it's newer or has higher quantity
                if (localTime > existingTime || localItem.quantity > existing.quantity) {
                    merged[existingIndex] = {
                        ...existing,
                        ...localItem,
                        quantity: Math.max(existing.quantity, localItem.quantity)
                    };
                }
            } else {
                // Item only exists locally - add it to merged cart
                merged.push(localItem);
            }
        });
        
        return merged;
    }
    
    // Cross-tab synchronization
    window.addEventListener('storage', function(e) {
        if (e.key === CART_STORAGE_KEY || e.key === CART_COUNT_KEY) {
            updateCartCountDisplay();
            
            // Fire cart updated event for cross-tab sync
            try {
                window.dispatchEvent(new CustomEvent('cartUpdated', { 
                    detail: { cart: getCart(), fromStorage: true } 
                }));
            } catch (e) {
                console.log('Cart updated from storage');
            }
        }
    });
    
    // Initialize cart count on page load
    document.addEventListener('DOMContentLoaded', function() {
        updateCartCountDisplay();
    });
    
    // 🔥 ENHANCED TECHCART API WITH FIREBASE INTEGRATION
    window.TechCart = {
        // Firebase properties
        currentUserId: null,
        isFirebaseEnabled: false,
        
        // Core cart actions (existing functionality)
        add: addToCart,
        remove: removeFromCart,
        updateQuantity: updateQuantity,
        clear: clearCart,
        
        // Data getters (existing functionality)
        get: getCart,
        getItems: getCart, // alias
        getCount: getCartCount,
        getTotal: getCartTotal,
        
        // Item checks (existing functionality)
        isInCart: isInCart,
        getItemQuantity: getItemQuantity,
        
        // Utilities (existing functionality)
        formatPrice: formatPrice,
        updateCount: updateCartCountDisplay,
        
        // 🔥 NEW FIREBASE METHODS
        
        // Initialize Firebase integration
        initFirebase: function() {
            if (isFirebaseAvailable()) {
                this.isFirebaseEnabled = true;
                console.log('✅ TechCart Firebase integration enabled');
                
                // Listen for auth state changes if Firebase Auth is available
                if (firebase.auth) {
                    firebase.auth().onAuthStateChanged((user) => {
                        if (user && user.emailVerified) {
                            this.setUserId(user.uid);
                        } else {
                            this.setUserId(null);
                        }
                    });
                }
            } else {
                this.isFirebaseEnabled = false;
                console.log('ℹ️ TechCart running in local-only mode');
            }
        },
        
        // Set user ID and handle cart switching
        setUserId: async function(userId) {
            const previousUserId = this.currentUserId;
            this.currentUserId = userId;
            
            if (userId && userId !== previousUserId) {
                // User logged in or switched - load their cart
                await loadUserCartFromFirestore(userId);
            } else if (!userId && previousUserId) {
                // User logged out - keep local cart but stop syncing
                console.log('📤 User logged out, cart remains local');
            }
        },
        
        // Enhanced add with immediate Firebase sync
        addWithSync: async function(product, quantity = 1) {
            const success = addToCart(product, quantity);
            
            if (success && this.currentUserId && this.isFirebaseEnabled) {
                // Immediate sync for better UX
                await saveUserCartToFirestore(this.currentUserId);
            }
            
            return success;
        },
        
        // Get comprehensive cart summary
        getSummary: function() {
            const items = this.get();
            const itemCount = items.reduce((total, item) => total + item.quantity, 0);
            const totalValue = items.reduce((total, item) => total + (item.price * item.quantity), 0);
            
            return {
                items: items,
                itemCount: itemCount,
                totalValue: totalValue,
                formattedTotal: this.formatPrice(totalValue),
                isEmpty: items.length === 0,
                lastUpdated: new Date().toISOString(),
                syncStatus: this.isFirebaseEnabled && this.currentUserId ? 'synced' : 'local'
            };
        },
        
        // Force sync with Firebase (useful for manual sync)
        forceSync: async function() {
            if (this.currentUserId && this.isFirebaseEnabled) {
                await saveUserCartToFirestore(this.currentUserId);
                return true;
            }
            return false;
        },
        
        // Clear user's Firebase cart (for complete logout)
        clearUserCart: async function(userId = null) {
            const targetUserId = userId || this.currentUserId;
            
            if (!this.isFirebaseEnabled || !targetUserId) return false;
            
            try {
                await db.collection('carts').doc(targetUserId).delete();
                console.log('🗑️ Cleared Firebase cart for user');
                return true;
            } catch (error) {
                console.error('Error clearing user cart:', error);
                return false;
            }
        }
    };
    
    // Auto-initialize Firebase when available
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            // Small delay to ensure Firebase scripts are loaded
            setTimeout(() => {
                window.TechCart.initFirebase();
            }, 250);
        });
    } else {
        // DOM already ready
        setTimeout(() => {
            window.TechCart.initFirebase();
        }, 250);
    }
    
    console.log('🛒 TechCart module loaded successfully with Firebase integration');
})();
