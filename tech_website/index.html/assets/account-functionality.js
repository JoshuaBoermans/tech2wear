// Account Page Enhanced Functionality
// This file contains all the enhanced features for the account page

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== MODAL FUNCTIONALITY =====
    
    // Show Change Password Modal
    window.showChangePasswordModal = function() {
        document.getElementById('changePasswordModal').classList.add('active');
    };

    // Show Notification Settings Modal
    window.showNotificationSettingsModal = function() {
        document.getElementById('notificationModal').classList.add('active');
    };

    // Close Modal
    window.closeModal = function(modalId) {
        document.getElementById(modalId).classList.remove('active');
    };

    // Close modal when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
        }
    });

    // ===== CHANGE PASSWORD FUNCTIONALITY =====
    
    const changePasswordForm = document.getElementById('changePasswordForm');
    if (changePasswordForm) {
        changePasswordForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const currentPassword = document.getElementById('currentPassword').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Validate passwords match
            if (newPassword !== confirmPassword) {
                showNotification('❌ Nieuwe wachtwoorden komen niet overeen', 'error');
                return;
            }
            
            // Validate password length
            if (newPassword.length < 6) {
                showNotification('❌ Nieuw wachtwoord moet minimaal 6 karakters bevatten', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            try {
                // Show loading state
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Wijzigen...';
                
                // Use TechAuth module to change password
                const result = await TechAuth.changePassword(currentPassword, newPassword);
                
                if (result.success) {
                    showNotification('✅ ' + result.message, 'success');
                    closeModal('changePasswordModal');
                    // Clear form
                    changePasswordForm.reset();
                } else {
                    showNotification('❌ ' + result.message, 'error');
                }
                
            } catch (error) {
                console.error('Change password error:', error);
                showNotification('❌ Er ging iets mis bij het wijzigen van je wachtwoord', 'error');
            } finally {
                // Restore button state
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        });
    }

    // ===== NOTIFICATION SETTINGS FUNCTIONALITY =====
    
    const notificationSettingsForm = document.getElementById('notificationSettingsForm');
    if (notificationSettingsForm) {
        notificationSettingsForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const user = firebase.auth().currentUser;
            if (!user) {
                showNotification('❌ Je moet ingelogd zijn om instellingen bij te werken', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            try {
                // Show loading state
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opslaan...';
                
                const notificationSettings = {
                    emailNotifications: document.getElementById('emailNotifications').value,
                    orderNotifications: document.getElementById('orderNotifications').value === 'true',
                    marketingEmails: document.getElementById('marketingEmails').value === 'true',
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                };
                
                // Update Firestore document
                await firebase.firestore().collection('users').doc(user.uid).update({
                    notificationSettings: notificationSettings
                });
                
                showNotification('✅ Notificatie-instellingen succesvol bijgewerkt!', 'success');
                closeModal('notificationModal');
                
            } catch (error) {
                console.error('Notification settings update error:', error);
                showNotification('❌ Er ging iets mis bij het bijwerken van je instellingen', 'error');
            } finally {
                // Restore button state
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        });
    }

    // ===== LOAD REAL ORDER HISTORY =====
    
    // Load user's orders from Firestore
    function loadOrderHistory() {
        const user = firebase.auth().currentUser;
        if (!user) return;
        
        const ordersContainer = document.getElementById('orders-container');
        if (!ordersContainer) return;
        
        // Show loading
        ordersContainer.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--color-text-muted);">
                <i class="fas fa-spinner fa-spin" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                <p>Loading your orders...</p>
            </div>
        `;
        
        // Load orders from Firestore
        firebase.firestore()
            .collection('orders')
            .where('userId', '==', user.uid)
            .orderBy('createdAt', 'desc')
            .get()
            .then(querySnapshot => {
                if (querySnapshot.empty) {
                    ordersContainer.innerHTML = `
                        <div style="text-align: center; padding: 3rem; color: var(--color-text-muted);">
                            <i class="fas fa-shopping-bag" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                            <h3>No orders yet</h3>
                            <p>You haven't placed any orders yet. Start shopping to see your order history here.</p>
                        </div>
                    `;
                    return;
                }
                
                let ordersHtml = '';
                querySnapshot.forEach(doc => {
                    const order = doc.data();
                    const orderDate = order.createdAt ? order.createdAt.toDate().toLocaleDateString('nl-NL') : 'Unknown date';
                    
                    // Get status class
                    let statusClass = 'status-processing';
                    if (order.status === 'delivered') statusClass = 'status-delivered';
                    else if (order.status === 'shipped') statusClass = 'status-shipped';
                    
                    // Create items summary
                    const itemsSummary = order.items.map(item => item.name).join(', ');
                    
                    ordersHtml += `
                        <div class="order-card">
                            <div class="order-header">
                                <div>
                                    <h4 style="color: var(--color-text-light); margin-bottom: 0.25rem;">Order #${order.orderNumber}</h4>
                                    <p style="color: var(--color-text-muted); margin: 0; font-size: 0.9rem;">${orderDate}</p>
                                </div>
                                <div style="text-align: right;">
                                    <p style="font-size: 1.2rem; font-weight: 600; color: var(--color-accent-blue); margin: 0 0 0.5rem 0;">€${order.total.toFixed(2)}</p>
                                    <span class="order-status ${statusClass}">${order.status}</span>
                                </div>
                            </div>
                            <p style="color: var(--color-text-muted); margin: 0;">${itemsSummary}</p>
                        </div>
                    `;
                });
                
                ordersContainer.innerHTML = ordersHtml;
            })
            .catch(error => {
                console.error('Error loading orders:', error);
                ordersContainer.innerHTML = `
                    <div style="text-align: center; padding: 3rem; color: var(--color-error);">
                        <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                        <p>Error loading orders. Please try again later.</p>
                    </div>
                `;
            });
    }

    // ===== CURRENCY SETTING FUNCTIONALITY =====
    
    const currencySelect = document.querySelector('#currency-select, select[value*="EUR"]');
    if (currencySelect) {
        currencySelect.addEventListener('change', async function() {
            const user = firebase.auth().currentUser;
            if (!user) return;
            
            try {
                const selectedCurrency = this.value || 'EUR';
                
                // Update Firestore document
                await firebase.firestore().collection('users').doc(user.uid).update({
                    preferredCurrency: selectedCurrency,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                });
                
                // Store in localStorage for immediate use
                localStorage.setItem('preferredCurrency', selectedCurrency);
                
                showNotification('✅ Valuta-instelling bijgewerkt naar ' + selectedCurrency, 'success');
                
                // Update all currency displays on the page
                updateCurrencyDisplays(selectedCurrency);
                
            } catch (error) {
                console.error('Currency update error:', error);
                showNotification('❌ Er ging iets mis bij het bijwerken van de valuta', 'error');
            }
        });
    }

    // Update currency displays across the page
    function updateCurrencyDisplays(currency) {
        const currencySymbols = {
            'EUR': '€',
            'USD': '$',
            'GBP': '£'
        };
        
        const symbol = currencySymbols[currency] || '€';
        
        // Update dashboard currency displays
        const currencyDisplays = document.querySelectorAll('[style*="color-accent-blue"]');
        currencyDisplays.forEach(element => {
            if (element.textContent.match(/[€$£]\d/)) {
                element.textContent = element.textContent.replace(/[€$£]/, symbol);
            }
        });
    }

    // ===== ENHANCED PROFILE FUNCTIONALITY =====
    
    // Enhanced user data loading with first/last name fix
    firebase.auth().onAuthStateChanged(async function(user) {
        if (!user) {
            console.log('❌ User not authenticated, redirecting to login');
            showNotification('⚠️ Je moet ingelogd zijn om je account te bekijken', 'warning');
            setTimeout(() => {
                window.location.href = 'login-page.html';
            }, 1000);
            return;
        }
        
        console.log('✅ User authenticated:', user.email);
        
        // Load user profile data from Firestore
        try {
            console.log('🔍 Loading user data for UID:', user.uid);
            const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
            
            if (userDoc.exists) {
                const userData = userDoc.data();
                console.log('✅ User data loaded from Firestore:', userData);
                
                // Populate profile form fields using IDs
                populateProfileForm(userData, user);
                
                // Update welcome message if exists
                updateWelcomeMessage(userData, user);
                
            } else {
                console.log('⚠️ No user document found, creating basic profile');
                // Create basic user document if it doesn't exist
                await createUserDocument(user);
            }
            
            // Load orders after user authentication
            loadOrderHistory();
            
        } catch (error) {
            console.error('❌ Error loading user data:', error);
            showNotification('⚠️ Er was een probleem met het laden van je gegevens', 'warning');
            
            // Fallback: try to create basic document with auth data
            try {
                console.log('🔄 Attempting fallback user creation...');
                await createUserDocument(user);
            } catch (fallbackError) {
                console.error('❌ Fallback creation also failed:', fallbackError);
            }
        }
    });
    
    // Enhanced populate profile form with proper ID usage
    function populateProfileForm(userData, user) {
        // Use specific IDs for better reliability
        const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        
        if (firstNameInput) firstNameInput.value = userData.firstName || '';
        if (lastNameInput) lastNameInput.value = userData.lastName || '';
        if (emailInput) emailInput.value = userData.email || user.email || '';
        if (phoneInput) phoneInput.value = userData.phone || '';
        
        // Update display elements with real user data
        updateUserDisplayElements(userData, user);
    }
    
    // Update all user display elements throughout the page
    function updateUserDisplayElements(userData, user) {
        const displayName = userData.firstName && userData.lastName ? 
            `${userData.firstName} ${userData.lastName}` : 
            (user.displayName || userData.firstName || 'Gebruiker');
            
        const displayEmail = userData.email || user.email || 'Geen email';
        
        // Update sidebar user info
        const userDisplayName = document.getElementById('user-display-name');
        const userDisplayEmail = document.getElementById('user-display-email');
        const userAddressName = document.getElementById('user-address-name');
        
        if (userDisplayName) {
            userDisplayName.textContent = displayName;
        }
        if (userDisplayEmail) {
            userDisplayEmail.textContent = displayEmail;
        }
        if (userAddressName) {
            userAddressName.textContent = displayName;
        }
        
        console.log('✅ User display elements updated:', { displayName, displayEmail });
    }
    
    // Create basic user document if missing
    async function createUserDocument(user) {
        try {
            const basicUserData = {
                email: user.email,
                firstName: user.displayName ? user.displayName.split(' ')[0] : '',
                lastName: user.displayName ? user.displayName.split(' ').slice(1).join(' ') : '',
                phone: '',
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
                emailVerified: user.emailVerified,
                preferredCurrency: 'EUR'
            };
            
            await firebase.firestore().collection('users').doc(user.uid).set(basicUserData);
            console.log('✅ Basic user document created');
            
            // Populate form with basic data
            populateProfileForm(basicUserData, user);
            
            // Also update display elements
            updateUserDisplayElements(basicUserData, user);
            
        } catch (error) {
            console.error('❌ Error creating user document:', error);
        }
    }

    // ===== LANGUAGE TOGGLE FUNCTIONALITY =====
    
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const selectedLang = this.dataset.lang;
            
            // Update active state
            langButtons.forEach(b => {
                b.classList.remove('active');
                b.style.background = 'transparent';
                b.style.color = 'var(--color-text-light)';
            });
            
            this.classList.add('active');
            this.style.background = 'var(--color-accent-blue)';
            this.style.color = 'var(--color-primary-dark)';
            
            // Store language preference
            localStorage.setItem('selectedLanguage', selectedLang);
            
            // Apply language changes
            applyLanguage(selectedLang);
            
            showNotification(`✅ Taal gewijzigd naar ${selectedLang.toUpperCase()}`, 'success');
        });
    });
    
    // Apply language on page load
    const savedLang = localStorage.getItem('selectedLanguage') || 'nl';
    applyLanguage(savedLang);
    
    // Update active language button
    langButtons.forEach(btn => {
        if (btn.dataset.lang === savedLang) {
            btn.classList.add('active');
            btn.style.background = 'var(--color-accent-blue)';
            btn.style.color = 'var(--color-primary-dark)';
        } else {
            btn.classList.remove('active');
            btn.style.background = 'transparent';
            btn.style.color = 'var(--color-text-light)';
        }
    });

    function applyLanguage(lang) {
        const translations = {
            'nl': {
                'My Account': 'Mijn Account',
                'Dashboard': 'Dashboard', 
                'Profile': 'Profiel',
                'Orders': 'Bestellingen',
                'Addresses': 'Adressen',
                'Settings': 'Instellingen',
                'Order History': 'Bestelgeschiedenis',
                'Profile Information': 'Profielinformatie',
                'Account Settings': 'Accountinstellingen',
                'Shipping Addresses': 'Verzendadressen',
                'First Name': 'Voornaam',
                'Last Name': 'Achternaam',
                'Phone': 'Telefoon',
                'Save Changes': 'Wijzigingen Opslaan',
                'Change Password': 'Wachtwoord Wijzigen',
                'Notification Settings': 'Meldingsinstellingen',
                'Email Notifications': 'E-mail Meldingen',
                'Currency': 'Valuta',
                'Continue Shopping': 'Verder Winkelen',
                'View Order History': 'Bekijk Bestelgeschiedenis',
                'Shop More Products': 'Meer Producten Winkelen',
                'Checkout': 'Afrekenen',
                'Add New Address': 'Nieuw Adres Toevoegen',
                'Save Preferences': 'Voorkeuren Opslaan'
            },
            'en': {
                'My Account': 'My Account',
                'Dashboard': 'Dashboard',
                'Profile': 'Profile', 
                'Orders': 'Orders',
                'Addresses': 'Addresses',
                'Settings': 'Settings',
                'Order History': 'Order History',
                'Profile Information': 'Profile Information',
                'Account Settings': 'Account Settings',
                'Shipping Addresses': 'Shipping Addresses',
                'First Name': 'First Name',
                'Last Name': 'Last Name',
                'Phone': 'Phone',
                'Save Changes': 'Save Changes',
                'Change Password': 'Change Password',
                'Notification Settings': 'Notification Settings',
                'Email Notifications': 'Email Notifications',
                'Currency': 'Currency',
                'Continue Shopping': 'Continue Shopping',
                'View Order History': 'View Order History',
                'Shop More Products': 'Shop More Products',
                'Checkout': 'Checkout',
                'Add New Address': 'Add New Address',
                'Save Preferences': 'Save Preferences'
            }
        };
        
        const currentTranslations = translations[lang];
        
        // Update page title
        document.title = currentTranslations['My Account'] + ' - Tech2Wear';
        
        // Update main page title
        const pageTitle = document.querySelector('.page-title');
        if (pageTitle) pageTitle.textContent = currentTranslations['My Account'];
        
        // Update navigation links
        document.querySelectorAll('.account-nav-link').forEach(link => {
            const icon = link.querySelector('i');
            const text = link.textContent.trim();
            
            if (text.includes('Dashboard')) {
                link.innerHTML = `${icon.outerHTML} ${currentTranslations['Dashboard']}`;
            } else if (text.includes('Profile')) {
                link.innerHTML = `${icon.outerHTML} ${currentTranslations['Profile']}`;
            } else if (text.includes('Orders')) {
                link.innerHTML = `${icon.outerHTML} ${currentTranslations['Orders']}`;
            } else if (text.includes('Addresses')) {
                link.innerHTML = `${icon.outerHTML} ${currentTranslations['Addresses']}`;
            } else if (text.includes('Settings')) {
                link.innerHTML = `${icon.outerHTML} ${currentTranslations['Settings']}`;
            }
        });
        
        // Update section titles
        document.querySelectorAll('.section-title').forEach(title => {
            Object.keys(currentTranslations).forEach(key => {
                if (title.textContent.includes(key)) {
                    title.textContent = title.textContent.replace(key, currentTranslations[key]);
                }
            });
        });
        
        // Update form labels
        document.querySelectorAll('.form-label').forEach(label => {
            Object.keys(currentTranslations).forEach(key => {
                if (label.textContent.includes(key)) {
                    label.textContent = currentTranslations[key];
                }
            });
        });
        
        // Update buttons
        document.querySelectorAll('.btn').forEach(btn => {
            Object.keys(currentTranslations).forEach(key => {
                if (btn.textContent.includes(key)) {
                    const icon = btn.querySelector('i');
                    if (icon) {
                        btn.innerHTML = `${icon.outerHTML} ${currentTranslations[key]}`;
                    } else {
                        btn.textContent = btn.textContent.replace(key, currentTranslations[key]);
                    }
                }
            });
        });
    }

    // ===== ENHANCED PROFILE FORM SUBMISSION =====
    
    const profileForm = document.querySelector('#profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const user = firebase.auth().currentUser;
            if (!user) {
                showNotification('❌ Je moet ingelogd zijn om je profiel bij te werken', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            try {
                // Show loading state
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opslaan...';
                
                // Use proper IDs for form data
                const updatedData = {
                    firstName: document.getElementById('firstName').value.trim(),
                    lastName: document.getElementById('lastName').value.trim(),
                    email: document.getElementById('email').value.trim(),
                    phone: document.getElementById('phone').value.trim(),
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                };
                
                // Update Firestore document
                await firebase.firestore().collection('users').doc(user.uid).update(updatedData);
                
                // Update Firebase Auth display name if changed
                const newDisplayName = `${updatedData.firstName} ${updatedData.lastName}`.trim();
                if (newDisplayName && newDisplayName !== user.displayName) {
                    await user.updateProfile({ displayName: newDisplayName });
                }
                
                showNotification('✅ Profiel succesvol bijgewerkt!', 'success');
                
                // Update display elements immediately
                updateUserDisplayElements(updatedData, user);
                
            } catch (error) {
                console.error('❌ Error updating profile:', error);
                showNotification('❌ Er ging iets mis bij het bijwerken van je profiel', 'error');
            } finally {
                // Restore button state
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        });
    }
});

// ===== NOTIFICATION SYSTEM =====

window.showNotification = function(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-secondary-dark);
        color: var(--color-text-light);
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        border-left: 4px solid var(--color-accent-blue);
        box-shadow: var(--shadow);
        z-index: 3000;
        max-width: 400px;
        font-size: 0.9rem;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    // Set border color based on type
    if (type === 'success') {
        notification.style.borderLeftColor = 'var(--color-success)';
    } else if (type === 'error') {
        notification.style.borderLeftColor = 'var(--color-error)';
    } else if (type === 'warning') {
        notification.style.borderLeftColor = 'var(--color-warning)';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
};