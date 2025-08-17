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
            'Discover Tomorrow\'s Technology Today': 'Ontdek De Technologie Van Morgen Vandaag',
            'From AI-powered smart homes to cutting-edge wearables, we bring you the latest innovations that transform how we live, work, and play.': 'Van AI-aangedreven slimme huizen tot geavanceerde wearables, brengen wij je de nieuwste innovaties die transformeren hoe we leven, werken en spelen.',
            'Shop Now': 'Shop Nu',
            'Explore Products': 'Ontdek Producten',
            'Explore Our Categories': 'Ontdek Onze Categorieën',
            'Discover cutting-edge technology across all categories': 'Ontdek geavanceerde technologie in alle categorieën',
            
            // Product categories
            'AI-Powered Smart Home': 'AI-Aangedreven Smart Home',
            'Wearable Tech & Fitness': 'Draagbare Tech & Fitness',
            'Wireless Audio': 'Draadloze Audio',
            'Wireless Earbuds & Headphones': 'Draadloze Oordopjes & Koptelefoons',
            'Drones & Accessories': 'Drones & Accessoires',
            'Portable Projectors': 'Draagbare Projectoren',
            'Gaming & VR': 'Gaming & VR',
            
            // Product category descriptions
            'Intelligent devices that learn and adapt to your lifestyle': 'Intelligente apparaten die leren en aanpassen aan jouw levensstijl',
            'Smart devices that go wherever you do': 'Slimme apparaten die overal met je meegaan',
            'Premium sound quality without the wires': 'Premium geluidskwaliteit zonder kabels',
            'Capture the world from new perspectives': 'Leg de wereld vast vanuit nieuwe perspectieven',
            'Big screen entertainment anywhere you go': 'Groot scherm entertainment waar je ook gaat',
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
            'New': 'Nieuw',
            'Hot': 'Populair',
            'View Products': 'Bekijk Producten',
            
            // Account pages
            'Dashboard': 'Dashboard',
            'Profile': 'Profiel',
            'Orders': 'Bestellingen', 
            'Addresses': 'Adressen',
            'Settings': 'Instellingen',
            'Order History': 'Bestelgeschiedenis',
            'Profile Information': 'Profiel Informatie',
            'Account Settings': 'Account Instellingen',
            'Shipping Addresses': 'Verzendadressen',
            'First Name': 'Voornaam',
            'Last Name': 'Achternaam',
            'Email': 'E-mail',
            'Phone': 'Telefoon',
            'Save Changes': 'Wijzigingen Opslaan',
            'Change Password': 'Wachtwoord Wijzigen',
            'Notification Settings': 'Notificatie Instellingen',
            'Email Notifications': 'E-mail Notificaties',
            'Currency': 'Valuta',
            'Shop More Products': 'Shop Meer Producten',
            'Checkout': 'Afrekenen',
            'Add New Address': 'Nieuw Adres Toevoegen',
            'Save Preferences': 'Voorkeuren Opslaan',
            
            // Cart & Checkout
            'Shopping Cart': 'Winkelwagen',
            'Your cart is empty': 'Je winkelwagen is leeg',
            'No orders yet': 'Nog geen bestellingen',
            'You haven\'t placed any orders yet. Start shopping to see your order history here.': 'Je hebt nog geen bestellingen geplaatst. Begin met winkelen om je bestelgeschiedenis hier te zien.',
            'No addresses saved': 'Geen adressen opgeslagen',
            'Add your first shipping address to make checkout faster.': 'Voeg je eerste verzendadres toe om het afrekenen sneller te maken.',
            
            // About page
            'About Tech2Wear': 'Over Tech2Wear',
            'Your Premium Electronics Destination': 'Jouw Premium Elektronica Bestemming',
            'Since 2020, Tech2Wear has been at the forefront of bringing cutting-edge technology to consumers worldwide.': 'Sinds 2020 staat Tech2Wear voorop in het brengen van geavanceerde technologie naar consumenten wereldwijd.',
            'Our Mission': 'Onze Missie',
            'To democratize access to premium technology': 'Premium technologie toegankelijk maken voor iedereen',
            'Why Choose Tech2Wear?': 'Waarom Tech2Wear?',
            
            // Contact page  
            'Get in Touch': 'Neem Contact Op',
            'Have questions? We\'re here to help!': 'Heb je vragen? Wij helpen je graag!',
            'Send us a Message': 'Stuur ons een Bericht',
            'Name': 'Naam',
            'Message': 'Bericht',
            'Send Message': 'Verstuur Bericht',
            
            // Footer
            'Newsletter': 'Nieuwsbrief',
            'Subscribe to our newsletter for the latest updates': 'Abonneer je op onze nieuwsbrief voor de laatste updates',
            'Enter your email': 'Voer je e-mail in',
            'Subscribe': 'Abonneren',
            'Quick Links': 'Snelle Links',
            'Customer Service': 'Klantenservice',
            'Privacy Policy': 'Privacybeleid',
            'Terms of Service': 'Servicevoorwaarden',
            'Warranty': 'Garantie',
            'Returns': 'Retouren',
            'FAQ': 'Veelgestelde Vragen',
            'Help Center': 'Helpcentrum',
            'Follow Us': 'Volg Ons',
            
            // Product details
            'Features': 'Kenmerken',
            'Specifications': 'Specificaties', 
            'Reviews': 'Beoordelingen',
            'Rating': 'Beoordeling',
            'In Stock': 'Op Voorraad',
            'Out of Stock': 'Niet Op Voorraad',
            'Free Shipping': 'Gratis Verzending',
            'Fast Delivery': 'Snelle Levering',
            '30-day return policy': '30 dagen retourbeleid',
            'Secure SSL Encryption': 'Veilige SSL Encryptie',
            'Free shipping over €50': 'Gratis verzending vanaf €50',
            
            // Error messages and notifications
            'Login successful': 'Succesvol ingelogd',
            'Please fill in all fields': 'Vul alle velden in',
            'Invalid email or password': 'Ongeldig e-mail of wachtwoord',
            'Registration successful': 'Registratie succesvol',
            'Profile updated successfully': 'Profiel succesvol bijgewerkt',
            'Address saved successfully': 'Adres succesvol opgeslagen',
            'Order placed successfully': 'Bestelling succesvol geplaatst',
            'Product added to cart': 'Product toegevoegd aan winkelwagen',
            'Language changed to Dutch': 'Taal gewijzigd naar Nederlands'
        },
        
        'en': {
            // Navigation & Header - English (keep original)
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
            'Discover Tomorrow\'s Technology Today': 'Discover Tomorrow\'s Technology Today',
            'From AI-powered smart homes to cutting-edge wearables, we bring you the latest innovations that transform how we live, work, and play.': 'From AI-powered smart homes to cutting-edge wearables, we bring you the latest innovations that transform how we live, work, and play.',
            'Shop Now': 'Shop Now',
            'Explore Products': 'Explore Products',
            'Explore Our Categories': 'Explore Our Categories',
            'Discover cutting-edge technology across all categories': 'Discover cutting-edge technology across all categories',
            
            // Product categories
            'AI-Powered Smart Home': 'AI-Powered Smart Home',
            'Wearable Tech & Fitness': 'Wearable Tech & Fitness',
            'Wireless Audio': 'Wireless Audio',
            'Wireless Earbuds & Headphones': 'Wireless Earbuds & Headphones',
            'Drones & Accessories': 'Drones & Accessories',
            'Portable Projectors': 'Portable Projectors',
            'Gaming & VR': 'Gaming & VR',
            
            // Product category descriptions
            'Intelligent devices that learn and adapt to your lifestyle': 'Intelligent devices that learn and adapt to your lifestyle',
            'Smart devices that go wherever you do': 'Smart devices that go wherever you do',
            'Premium sound quality without the wires': 'Premium sound quality without the wires',
            'Capture the world from new perspectives': 'Capture the world from new perspectives',
            'Big screen entertainment anywhere you go': 'Big screen entertainment anywhere you go',
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
            'New': 'New',
            'Hot': 'Hot',
            'View Products': 'View Products',
            
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
            'No orders yet': 'No orders yet',
            'You haven\'t placed any orders yet. Start shopping to see your order history here.': 'You haven\'t placed any orders yet. Start shopping to see your order history here.',
            'No addresses saved': 'No addresses saved',
            'Add your first shipping address to make checkout faster.': 'Add your first shipping address to make checkout faster.',
            
            // About page
            'About Tech2Wear': 'About Tech2Wear',
            'Your Premium Electronics Destination': 'Your Premium Electronics Destination',
            'Since 2020, Tech2Wear has been at the forefront of bringing cutting-edge technology to consumers worldwide.': 'Since 2020, Tech2Wear has been at the forefront of bringing cutting-edge technology to consumers worldwide.',
            'Our Mission': 'Our Mission',
            'To democratize access to premium technology': 'To democratize access to premium technology',
            'Why Choose Tech2Wear?': 'Why Choose Tech2Wear?',
            
            // Contact page
            'Get in Touch': 'Get in Touch',
            'Have questions? We\'re here to help!': 'Have questions? We\'re here to help!',
            'Send us a Message': 'Send us a Message',
            'Name': 'Name',
            'Message': 'Message',
            'Send Message': 'Send Message',
            
            // Footer
            'Newsletter': 'Newsletter',
            'Subscribe to our newsletter for the latest updates': 'Subscribe to our newsletter for the latest updates',
            'Enter your email': 'Enter your email',
            'Subscribe': 'Subscribe',
            'Quick Links': 'Quick Links',
            'Customer Service': 'Customer Service',
            'Privacy Policy': 'Privacy Policy',
            'Terms of Service': 'Terms of Service',
            'Warranty': 'Warranty',
            'Returns': 'Returns',
            'FAQ': 'FAQ',
            'Help Center': 'Help Center',
            'Follow Us': 'Follow Us',
            
            // Product details
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
            'Free shipping over €50': 'Free shipping over €50',
            
            // Error messages and notifications
            'Login successful': 'Login successful',
            'Please fill in all fields': 'Please fill in all fields',
            'Invalid email or password': 'Invalid email or password',
            'Registration successful': 'Registration successful',
            'Profile updated successfully': 'Profile updated successfully',
            'Address saved successfully': 'Address saved successfully',
            'Order placed successfully': 'Order placed successfully',
            'Product added to cart': 'Product added to cart',
            'Language changed to English': 'Language changed to English'
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
            // Try different header selectors
            const headerSelectors = [
                '.site-header .container .header-wrapper',
                '.site-header .container',
                '.header-wrapper', 
                'header .container',
                '.site-header',
                'header'
            ];
            
            let header = null;
            for (const selector of headerSelectors) {
                header = document.querySelector(selector);
                if (header) break;
            }
            
            if (header) {
                headerActions = document.createElement('div');
                headerActions.className = 'header-actions';
                headerActions.style.cssText = 'display: flex; align-items: center; gap: 1rem; margin-left: auto;';
                header.appendChild(headerActions);
            } else {
                // Fallback: add to body
                headerActions = document.createElement('div');
                headerActions.className = 'header-actions';
                headerActions.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 9999; display: flex; align-items: center; gap: 1rem; background: rgba(0,0,0,0.8); padding: 0.5rem; border-radius: 8px;';
                document.body.appendChild(headerActions);
            }
        }

        // Create language toggle HTML
        const languageToggleHTML = `
            <div class="language-toggle" style="display: flex; align-items: center; gap: 0.5rem;">
                <button class="lang-btn" data-lang="nl" style="padding: 0.25rem 0.5rem; border: 1px solid var(--color-border, #333); background: transparent; color: var(--color-text-light, #fff); border-radius: 4px; cursor: pointer; font-size: 0.8rem; transition: all 0.3s ease;">
                    NL
                </button>
                <button class="lang-btn" data-lang="en" style="padding: 0.25rem 0.5rem; border: 1px solid var(--color-border, #333); background: transparent; color: var(--color-text-light, #fff); border-radius: 4px; cursor: pointer; font-size: 0.8rem; transition: all 0.3s ease;">
                    EN
                </button>
            </div>
        `;

        headerActions.insertAdjacentHTML('beforeend', languageToggleHTML);

        // Add click event listeners
        headerActions.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.switchLanguage(lang);
            });
        });
    },

    // Switch language function
    switchLanguage: function(lang) {
        // Save to localStorage
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
                btn.style.borderColor = 'var(--color-accent-blue, #00ffff)';
            } else {
                btn.classList.remove('active');
                btn.style.background = 'transparent';
                btn.style.color = 'var(--color-text-light, #fff)';
                btn.style.borderColor = 'var(--color-border, #333)';
            }
        });
    },

    // Apply language translations to current page
    applyLanguage: function(lang) {
        const currentTranslations = this.translations[lang];
        if (!currentTranslations) return;

        // Update page title
        const pageTitleMap = {
            'Tech2wear - Discover Tomorrow\'s Technology Today': lang === 'nl' ? 'Tech2wear - Ontdek De Technologie Van Morgen Vandaag' : 'Tech2wear - Discover Tomorrow\'s Technology Today',
            'My Account': currentTranslations['My Account'],
            'Shopping Cart': currentTranslations['Shopping Cart'],
            'Checkout': currentTranslations['Checkout'],
            'Shop': currentTranslations['Shop'],
            'About Us': currentTranslations['About Us'],
            'Contact': currentTranslations['Contact'],
            'Deals': currentTranslations['Deals']
        };
        
        Object.keys(pageTitleMap).forEach(key => {
            if (document.title.includes(key)) {
                document.title = document.title.replace(key, pageTitleMap[key]);
            }
        });

        // Comprehensive text translation
        this.translatePage(currentTranslations);
    },

    // More comprehensive page translation
    translatePage: function(translations) {
        // Handle all text elements with specific selectors
        const textSelectors = [
            'h1, h2, h3, h4, h5, h6',
            'p',
            'span',
            'a',
            'button',
            'label',
            '.category-title',
            '.category-description',
            '.section-title',
            '.section-subtitle',
            '.page-title',
            '.page-subtitle',
            '.nav-link',
            '.btn',
            '.form-label',
            '.footer-title',
            '.badge'
        ];

        textSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                this.translateElement(element, translations);
            });
        });

        // Special handling for placeholders
        document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(element => {
            const placeholder = element.getAttribute('placeholder');
            if (translations[placeholder]) {
                element.setAttribute('placeholder', translations[placeholder]);
            }
        });

        // Special handling for alt text
        document.querySelectorAll('img[alt]').forEach(element => {
            const alt = element.getAttribute('alt');
            if (translations[alt]) {
                element.setAttribute('alt', translations[alt]);
            }
        });
    },

    // Translate individual element
    translateElement: function(element, translations) {
        // Skip if element contains only child elements (no direct text)
        if (element.children.length > 0 && !element.childNodes.length) return;
        
        // Get the text content, handling elements with icons
        let textContent = '';
        let hasIcon = false;
        
        // Check if element has icon
        const icon = element.querySelector('i.fas, i.far, i.fab');
        if (icon) {
            hasIcon = true;
            // Get text without icon
            const clonedElement = element.cloneNode(true);
            const clonedIcon = clonedElement.querySelector('i.fas, i.far, i.fab');
            if (clonedIcon) clonedIcon.remove();
            textContent = clonedElement.textContent.trim();
        } else {
            textContent = element.textContent.trim();
        }

        // Check for exact matches first
        if (translations[textContent]) {
            if (hasIcon && icon) {
                element.innerHTML = icon.outerHTML + ' ' + translations[textContent];
            } else {
                element.textContent = translations[textContent];
            }
        } else {
            // Check for partial matches
            Object.keys(translations).forEach(key => {
                if (textContent.includes(key) && key.length > 3) { // Avoid matching short words
                    const newText = textContent.replace(key, translations[key]);
                    if (hasIcon && icon) {
                        element.innerHTML = icon.outerHTML + ' ' + newText;
                    } else {
                        element.textContent = newText;
                    }
                }
            });
        }
    },

    // Translate function for other scripts to use
    translate: function(text) {
        const currentLang = localStorage.getItem('selectedLanguage') || 'nl';
        const translations = this.translations[currentLang];
        return translations && translations[text] ? translations[text] : text;
    }
};

// Auto-initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (window.LanguageSystem) {
        LanguageSystem.init();
    }
});

// Also initialize immediately if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        if (window.LanguageSystem) {
            LanguageSystem.init();
        }
    });
} else {
    if (window.LanguageSystem) {
        LanguageSystem.init();
    }
}