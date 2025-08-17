// Universal Language Toggle System for Tech2Wear
// This module provides language switching functionality across all pages

window.LanguageSystem = {
    
    // Language translations database
    translations: {
        'nl': {
            // Navigation & Header
            'Home': 'Home',
            'Shop': 'Shop',
            'Deals': 'Aanbiedingen',
            'About Us': 'Over Ons',
            'Contact': 'Contact',
            'My Account': 'Mijn Account',
            'Cart': 'Winkelwagen',
            'Search': 'Zoeken',
            'Search for products...': 'Zoek naar producten...',
            
            // Homepage sections
            'Future Tech Today': 'Toekomstige Technologie Vandaag',
            'Discover Tomorrow\'s Technology': 'Ontdek De Technologie Van Morgen',
            'From AI-powered smart homes to cutting-edge wearables': 'Van AI-aangedreven slimme huizen tot geavanceerde wearables',
            'we bring you the latest innovations': 'brengen wij je de nieuwste innovaties',
            'Shop Now': 'Shop Nu',
            'Explore Products': 'Ontdek Producten',
            
            // Product categories
            'AI-Powered Smart Home': 'AI-Aangedreven Smart Home',
            'Wearable Tech & Fitness': 'Draagbare Tech & Fitness',
            'Wireless Earbuds & Headphones': 'Draadloze Oordopjes & Koptelefoons',
            'Drones & Accessories': 'Drones & Accessoires',
            'Portable Projectors': 'Draagbare Projectoren',
            'Gaming & VR': 'Gaming & VR',
            
            // Product category descriptions
            'Transform your home with intelligent automation': 'Transformeer je huis met intelligente automatisering',
            'Advanced fitness tracking and health monitoring': 'Geavanceerde fitness tracking en gezondheidsmonitoring',
            'Premium audio experience with noise cancellation': 'Premium audio-ervaring met ruisonderdrukking',
            'Professional and recreational drone technology': 'Professionele en recreatieve drone technologie',
            'Cinema-quality projection in portable formats': 'Bioscoopkwaliteit projectie in draagbare formaten',
            'Next-generation gaming and virtual reality': 'Next-generation gaming en virtual reality',
            
            // Buttons
            'Explore': 'Ontdek',
            'View Details': 'Bekijk Details',
            'Add to Cart': 'Toevoegen aan Winkelwagen',
            'Buy Now': 'Koop Nu',
            'Continue Shopping': 'Verder Winkelen',
            'Proceed to Checkout': 'Ga naar Afrekenen',
            'View Cart': 'Bekijk Winkelwagen',
            
            // Account pages
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
            'Email': 'E-mail',
            'Phone': 'Telefoon',
            'Save Changes': 'Wijzigingen Opslaan',
            'Change Password': 'Wachtwoord Wijzigen',
            'Notification Settings': 'Meldingsinstellingen',
            'Email Notifications': 'E-mail Meldingen',
            'Currency': 'Valuta',
            'Shop More Products': 'Meer Producten Winkelen',
            'Checkout': 'Afrekenen',
            'Add New Address': 'Nieuw Adres Toevoegen',
            'Save Preferences': 'Voorkeuren Opslaan',
            
            // Cart & Checkout
            'Shopping Cart': 'Winkelwagen',
            'Your cart is empty': 'Je winkelwagen is leeg',
            'Subtotal': 'Subtotaal',
            'Shipping': 'Verzendkosten',
            'Tax': 'BTW',
            'Total': 'Totaal',
            'Remove': 'Verwijderen',
            'Update': 'Bijwerken',
            'Quantity': 'Aantal',
            
            // Checkout page
            'Contact Information': 'Contactgegevens',
            'Shipping Address': 'Verzendadres',
            'Payment Method': 'Betaalmethode',
            'Street Address': 'Straat en Huisnummer',
            'City': 'Stad',
            'Postal Code': 'Postcode',
            'Country': 'Land',
            'Place Order': 'Bestelling Plaatsen',
            'Order Summary': 'Bestellingsoverzicht',
            
            // Messages and notifications
            'No orders yet': 'Nog geen bestellingen',
            'No addresses saved': 'Geen adressen opgeslagen',
            'Loading...': 'Laden...',
            'Error loading data': 'Fout bij laden van gegevens',
            'Success!': 'Gelukt!',
            'Error': 'Fout',
            
            // Footer
            'Support': 'Ondersteuning',
            'Company': 'Bedrijf',
            'Privacy Policy': 'Privacybeleid',
            'Terms of Service': 'Algemene Voorwaarden',
            'FAQ': 'Veelgestelde Vragen',
            'Warranty': 'Garantie',
            
            // Other common terms
            'Price': 'Prijs',
            'Description': 'Beschrijving',
            'Features': 'Functies',
            'Specifications': 'Specificaties',
            'Reviews': 'Reviews',
            'Rating': 'Beoordeling',
            'In Stock': 'Op Voorraad',
            'Out of Stock': 'Niet op Voorraad',
            'Free Shipping': 'Gratis Verzending',
            'Fast Delivery': 'Snelle Levering',
            '30-day return policy': '30 dagen retourbeleid',
            'Secure SSL Encryption': 'Veilige SSL Versleuteling',
            'Free shipping over €50': 'Gratis verzending vanaf €50'
        },
        'en': {
            // Navigation & Header
            'Home': 'Home',
            'Shop': 'Shop',
            'Deals': 'Deals',
            'About Us': 'About Us',
            'Contact': 'Contact',
            'My Account': 'My Account',
            'Cart': 'Cart',
            'Search': 'Search',
            'Search for products...': 'Search for products...',
            
            // Homepage sections
            'Future Tech Today': 'Future Tech Today',
            'Discover Tomorrow\'s Technology': 'Discover Tomorrow\'s Technology',
            'From AI-powered smart homes to cutting-edge wearables': 'From AI-powered smart homes to cutting-edge wearables',
            'we bring you the latest innovations': 'we bring you the latest innovations',
            'Shop Now': 'Shop Now',
            'Explore Products': 'Explore Products',
            
            // Product categories
            'AI-Powered Smart Home': 'AI-Powered Smart Home',
            'Wearable Tech & Fitness': 'Wearable Tech & Fitness',
            'Wireless Earbuds & Headphones': 'Wireless Earbuds & Headphones',
            'Drones & Accessories': 'Drones & Accessories',
            'Portable Projectors': 'Portable Projectors',
            'Gaming & VR': 'Gaming & VR',
            
            // Product category descriptions
            'Transform your home with intelligent automation': 'Transform your home with intelligent automation',
            'Advanced fitness tracking and health monitoring': 'Advanced fitness tracking and health monitoring',
            'Premium audio experience with noise cancellation': 'Premium audio experience with noise cancellation',
            'Professional and recreational drone technology': 'Professional and recreational drone technology',
            'Cinema-quality projection in portable formats': 'Cinema-quality projection in portable formats',
            'Next-generation gaming and virtual reality': 'Next-generation gaming and virtual reality',
            
            // Buttons
            'Explore': 'Explore',
            'View Details': 'View Details',
            'Add to Cart': 'Add to Cart',
            'Buy Now': 'Buy Now',
            'Continue Shopping': 'Continue Shopping',
            'Proceed to Checkout': 'Proceed to Checkout',
            'View Cart': 'View Cart',
            
            // Account pages
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
            'Email': 'Email',
            'Phone': 'Phone',
            'Save Changes': 'Save Changes',
            'Change Password': 'Change Password',
            'Notification Settings': 'Notification Settings',
            'Email Notifications': 'Email Notifications',
            'Currency': 'Currency',
            'Shop More Products': 'Shop More Products',
            'Checkout': 'Checkout',
            'Add New Address': 'Add New Address',
            'Save Preferences': 'Save Preferences',
            
            // Cart & Checkout
            'Shopping Cart': 'Shopping Cart',
            'Your cart is empty': 'Your cart is empty',
            'Subtotal': 'Subtotal',
            'Shipping': 'Shipping',
            'Tax': 'Tax',
            'Total': 'Total',
            'Remove': 'Remove',
            'Update': 'Update',
            'Quantity': 'Quantity',
            
            // Checkout page
            'Contact Information': 'Contact Information',
            'Shipping Address': 'Shipping Address',
            'Payment Method': 'Payment Method',
            'Street Address': 'Street Address',
            'City': 'City',
            'Postal Code': 'Postal Code',
            'Country': 'Country',
            'Place Order': 'Place Order',
            'Order Summary': 'Order Summary',
            
            // Messages and notifications
            'No orders yet': 'No orders yet',
            'No addresses saved': 'No addresses saved',
            'Loading...': 'Loading...',
            'Error loading data': 'Error loading data',
            'Success!': 'Success!',
            'Error': 'Error',
            
            // Footer
            'Support': 'Support',
            'Company': 'Company',
            'Privacy Policy': 'Privacy Policy',
            'Terms of Service': 'Terms of Service',
            'FAQ': 'FAQ',
            'Warranty': 'Warranty',
            
            // Other common terms
            'Price': 'Price',
            'Description': 'Description',
            'Features': 'Features',
            'Specifications': 'Specifications',
            'Reviews': 'Reviews',
            'Rating': 'Rating',
            'In Stock': 'In Stock',
            'Out of Stock': 'Out of Stock',
            'Free Shipping': 'Free Shipping',
            'Fast Delivery': 'Fast Delivery',
            '30-day return policy': '30-day return policy',
            'Secure SSL Encryption': 'Secure SSL Encryption',
            'Free shipping over €50': 'Free shipping over €50'
        }
    },

    // Initialize language system
    init: function() {
        this.addLanguageToggle();
        const savedLang = localStorage.getItem('selectedLanguage') || 'nl';
        this.applyLanguage(savedLang);
        this.updateLanguageButtons(savedLang);
    },

    // Add language toggle to page if not exists
    addLanguageToggle: function() {
        // Check if language toggle already exists
        if (document.querySelector('.language-toggle')) {
            return;
        }

        // Find header actions or create one
        let headerActions = document.querySelector('.header-actions');
        if (!headerActions) {
            // If no header actions, try to find header and add it
            const header = document.querySelector('.site-header .container .header-wrapper, .header-wrapper, header .container');
            if (header) {
                headerActions = document.createElement('div');
                headerActions.className = 'header-actions';
                headerActions.style.cssText = 'display: flex; align-items: center; gap: 1rem;';
                header.appendChild(headerActions);
            } else {
                // Fallback: add to body
                headerActions = document.createElement('div');
                headerActions.className = 'header-actions';
                headerActions.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 9999; display: flex; align-items: center; gap: 1rem;';
                document.body.appendChild(headerActions);
            }
        }

        // Create language toggle HTML
        const languageToggleHTML = `
            <div class="language-toggle" style="display: flex; align-items: center; gap: 0.5rem; margin-right: 1rem;">
                <button class="lang-btn" data-lang="nl" style="padding: 0.5rem; border: 1px solid var(--color-border, #333); background: var(--color-accent-blue, #00ffff); color: var(--color-primary-dark, #0a0a0a); border-radius: 4px; cursor: pointer; font-size: 0.8rem; font-weight: 600;">NL</button>
                <button class="lang-btn" data-lang="en" style="padding: 0.5rem; border: 1px solid var(--color-border, #333); background: transparent; color: var(--color-text-light, #fff); border-radius: 4px; cursor: pointer; font-size: 0.8rem; font-weight: 600;">EN</button>
            </div>
        `;

        // Add to the beginning of header actions
        headerActions.insertAdjacentHTML('afterbegin', languageToggleHTML);

        // Add event listeners
        this.addLanguageEventListeners();
    },

    // Add event listeners to language buttons
    addLanguageEventListeners: function() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const selectedLang = btn.dataset.lang;
                this.switchLanguage(selectedLang);
            });
        });
    },

    // Switch language
    switchLanguage: function(lang) {
        // Store preference
        localStorage.setItem('selectedLanguage', lang);
        
        // Apply language
        this.applyLanguage(lang);
        
        // Update button states
        this.updateLanguageButtons(lang);
        
        // Show notification if available
        if (window.showNotification) {
            const message = lang === 'nl' ? '✅ Taal gewijzigd naar Nederlands' : '✅ Language changed to English';
            showNotification(message, 'success');
        }
    },

    // Update language button states
    updateLanguageButtons: function(selectedLang) {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            if (btn.dataset.lang === selectedLang) {
                btn.classList.add('active');
                btn.style.background = 'var(--color-accent-blue, #00ffff)';
                btn.style.color = 'var(--color-primary-dark, #0a0a0a)';
            } else {
                btn.classList.remove('active');
                btn.style.background = 'transparent';
                btn.style.color = 'var(--color-text-light, #fff)';
            }
        });
    },

    // Apply language translations to current page
    applyLanguage: function(lang) {
        const currentTranslations = this.translations[lang];
        if (!currentTranslations) return;

        // Update page title
        const pageTitleMap = {
            'My Account': currentTranslations['My Account'],
            'Shopping Cart': currentTranslations['Shopping Cart'],
            'Checkout': currentTranslations['Checkout'],
            'Shop': currentTranslations['Shop']
        };
        
        Object.keys(pageTitleMap).forEach(key => {
            if (document.title.includes(key)) {
                document.title = document.title.replace(key, pageTitleMap[key]);
            }
        });

        // Translate all text nodes
        this.translateTextNodes(document.body, currentTranslations);

        // Special handling for specific elements
        this.translateSpecialElements(currentTranslations);
    },

    // Translate text nodes recursively
    translateTextNodes: function(element, translations) {
        // Skip script and style tags
        if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE') return;

        // Handle text nodes
        for (let i = 0; i < element.childNodes.length; i++) {
            const node = element.childNodes[i];
            
            if (node.nodeType === Node.TEXT_NODE) {
                let text = node.textContent.trim();
                if (text && translations[text]) {
                    node.textContent = node.textContent.replace(text, translations[text]);
                }
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                // Recursively translate child elements
                this.translateTextNodes(node, translations);
            }
        }
    },

    // Handle special elements that need specific translation logic
    translateSpecialElements: function(translations) {
        // Translate buttons with icons
        document.querySelectorAll('button, .btn, a').forEach(element => {
            const textContent = element.textContent.trim();
            Object.keys(translations).forEach(key => {
                if (textContent.includes(key)) {
                    const icon = element.querySelector('i');
                    if (icon) {
                        element.innerHTML = `${icon.outerHTML} ${translations[key]}`;
                    } else if (textContent === key) {
                        element.textContent = translations[key];
                    }
                }
            });
        });

        // Translate labels
        document.querySelectorAll('label, .form-label').forEach(label => {
            Object.keys(translations).forEach(key => {
                if (label.textContent.includes(key)) {
                    label.textContent = label.textContent.replace(key, translations[key]);
                }
            });
        });

        // Translate placeholders
        document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(input => {
            Object.keys(translations).forEach(key => {
                if (input.placeholder.includes(key)) {
                    input.placeholder = input.placeholder.replace(key, translations[key]);
                }
            });
        });

        // Translate navigation links with icons
        document.querySelectorAll('.nav-link, .account-nav-link').forEach(link => {
            const text = link.textContent.trim();
            Object.keys(translations).forEach(key => {
                if (text.includes(key)) {
                    const icon = link.querySelector('i');
                    if (icon) {
                        link.innerHTML = `${icon.outerHTML} ${translations[key]}`;
                    }
                }
            });
        });
    },

    // Get current language
    getCurrentLanguage: function() {
        return localStorage.getItem('selectedLanguage') || 'nl';
    },

    // Translate a specific text
    translate: function(key, lang = null) {
        const targetLang = lang || this.getCurrentLanguage();
        return this.translations[targetLang] && this.translations[targetLang][key] 
               ? this.translations[targetLang][key] 
               : key;
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    LanguageSystem.init();
});

// Re-initialize on navigation (for SPAs)
window.addEventListener('popstate', function() {
    setTimeout(() => LanguageSystem.init(), 100);
});