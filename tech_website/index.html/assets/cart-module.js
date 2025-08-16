// cart-module.js - Gedeelde cart functionaliteit voor alle pagina's
(function() {
    'use strict';
    
    // Cart configuration
    const CART_STORAGE_KEY = 'tech2wear_cart';
    const CART_COUNT_KEY = 'tech2wear_cartCount';
    const CART_INIT_KEY = 'tech2wear_initialized';
    
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
    
    function saveCart(cart) {
        try {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
            updateCartCountDisplay(cart);
        } catch (error) {
            console.warn('Error saving cart:', error);
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
                addedAt: new Date().toISOString() // TOEGEVOEGD: timestamp
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
    
    // NIEUWE HELPER FUNCTIES (toegevoegd voor volledige compatibiliteit)
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
    
    // Cross-tab synchronization
    window.addEventListener('storage', function(e) {
        if (e.key === CART_STORAGE_KEY || e.key === CART_COUNT_KEY) {
            updateCartCountDisplay();
        }
    });
    
    // Initialize cart count on page load
    document.addEventListener('DOMContentLoaded', function() {
        updateCartCountDisplay();
    });
    
    // Global Cart API - UITGEBREID MET EXTRA FUNCTIES
    window.TechCart = {
        // Core actions
        add: addToCart,
        remove: removeFromCart,
        updateQuantity: updateQuantity,
        clear: clearCart,
        
        // Data getters
        get: getCart,
        getItems: getCart, // alias
        getCount: getCartCount,
        getTotal: getCartTotal,
        
        // Item checks
        isInCart: isInCart,
        getItemQuantity: getItemQuantity,
        
        // Utilities
        formatPrice: formatPrice,
        updateCount: updateCartCountDisplay
    };
    
    console.log('TechCart module loaded successfully');
})();
