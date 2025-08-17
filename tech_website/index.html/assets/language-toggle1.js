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
            
            // Homepage hero section
            'Discover Tomorrow\'s': 'Ontdek Morgen\'s',
            'Technology': 'Technologie',
            'Today': 'Vandaag',
            'Premium electronics, smart devices, and cutting-edge gadgets delivered worldwide.': 'Premium elektronica, slimme apparaten en geavanceerde gadgets wereldwijd geleverd.',
            'Experience the future of technology with our curated collection of innovative products.': 'Ervaar de toekomst van technologie met onze selectie van innovatieve producten.',
            'Shop Now': 'Shop Nu',
            'View Deals': 'Bekijk Aanbiedingen', 
            
            // Hero stats
            'Products': 'Producten',
            'Happy Customers': 'Tevreden Klanten',
            'Countries': 'Landen',
            'Years Experience': 'Jaar Ervaring',
            
            // Homepage sections
            'Future Tech Today': 'Toekomstige Technologie Vandaag',
            'Discover Tomorrow\'s Technology Today': 'Ontdek De Technologie Van Morgen Vandaag',
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
            
            // Featured products section
            'Featured Products': 'Uitgelichte Producten',
            'Hand-picked premium devices for the modern lifestyle': 'Handmatig geselecteerde premium apparaten voor de moderne levensstijl',
            
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
            
            // Footer
            'Newsletter': 'Nieuwsbrief',
            'Subscribe to our newsletter for the latest updates and exclusive deals.': 'Abonneer je op onze nieuwsbrief voor de laatste updates en exclusieve aanbiedingen.',
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
            
            // Trust indicators
            'Free Worldwide Shipping': 'Gratis Wereldwijde Verzending',
            'Secure Payment': 'Veilige Betaling',
            '30-Day Returns': '30 Dagen Retourrecht',
            '24/7 Support': '24/7 Ondersteuning',
            'Free shipping on orders over €50': 'Gratis verzending bij bestellingen vanaf €50',
            'All transactions are secured with SSL encryption': 'Alle transacties zijn beveiligd met SSL-encryptie',
            'Easy returns within 30 days of purchase': 'Eenvoudig retourneren binnen 30 dagen na aankoop',
            'Round-the-clock customer support': '24/7 klantenondersteuning',
            
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
            // Navigation & Header - English (original)
            'Home': 'Home',
            'Shop': 'Shop', 
            'Deals': 'Deals',
            'About Us': 'About Us',
            'Contact': 'Contact',
            'My Account': 'My Account',
            'Cart': 'Cart',
            'Search': 'Search',
            'Search for products...': 'Search for products...',
            
            // Homepage hero section
            'Discover Tomorrow\'s': 'Discover Tomorrow\'s',
            'Technology': 'Technology',
            'Today': 'Today',
            'Premium electronics, smart devices, and cutting-edge gadgets delivered worldwide.': 'Premium electronics, smart devices, and cutting-edge gadgets delivered worldwide.',
            'Experience the future of technology with our curated collection of innovative products.': 'Experience the future of technology with our curated collection of innovative products.',
            'Shop Now': 'Shop Now',
            'View Deals': 'View Deals',
            
            // Hero stats
            'Products': 'Products',
            'Happy Customers': 'Happy Customers',
            'Countries': 'Countries',
            'Years Experience': 'Years Experience',
            
            // Homepage sections
            'Future Tech Today': 'Future Tech Today',
            'Discover Tomorrow\'s Technology Today': 'Discover Tomorrow\'s Technology Today',
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
            
            // Featured products section
            'Featured Products': 'Featured Products',
            'Hand-picked premium devices for the modern lifestyle': 'Hand-picked premium devices for the modern lifestyle',
            
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
            
            // Footer
            'Newsletter': 'Newsletter',
            'Subscribe to our newsletter for the latest updates and exclusive deals.': 'Subscribe to our newsletter for the latest updates and exclusive deals.',
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
            
            // Trust indicators
            'Free Worldwide Shipping': 'Free Worldwide Shipping',
            'Secure Payment': 'Secure Payment',
            '30-Day Returns': '30-Day Returns',
            '24/7 Support': '24/7 Support',
            'Free shipping on orders over €50': 'Free shipping on orders over €50',
            'All transactions are secured with SSL encryption': 'All transactions are secured with SSL encryption',
            'Easy returns within 30 days of purchase': 'Easy returns within 30 days of purchase',
            'Round-the-clock customer support': 'Round-the-clock customer support',
            
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
        console.log('🌐 Language System: Initializing...');
        this.addLanguageToggle();
        const savedLang = localStorage.getItem('selectedLanguage') || 'nl';
        console.log('🌐 Language System: Applying saved language:', savedLang);
        this.applyLanguage(savedLang);
        this.updateLanguageButtons(savedLang);
        console.log('✅ Language System: Initialized successfully');
    },

    // Add language toggle to page if not exists
    addLanguageToggle: function() {
        // Check if language toggle already exists
        if (document.querySelector('.language-toggle')) {
            console.log('🌐 Language toggle already exists');
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
                if (header) {
                    console.log('🌐 Found header with selector:', selector);
                    break;
                }
            }
            
            if (header) {
                headerActions = document.createElement('div');
                headerActions.className = 'header-actions';
                headerActions.style.cssText = 'display: flex; align-items: center; gap: 1rem; margin-left: auto;';
                header.appendChild(headerActions);
                console.log('✅ Created header actions container');
            } else {
                // Fallback: add to body
                headerActions = document.createElement('div');
                headerActions.className = 'header-actions';
                headerActions.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 9999; display: flex; align-items: center; gap: 1rem; background: rgba(0,0,0,0.8); padding: 0.5rem; border-radius: 8px;';
                document.body.appendChild(headerActions);
                console.log('✅ Created fallback header actions container');
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
                console.log('🌐 Language button clicked:', lang);
                this.switchLanguage(lang);
            });
        });

        console.log('✅ Language toggle buttons added');
    },

    // Switch language function
    switchLanguage: function(lang) {
        console.log('🌐 Switching language to:', lang);
        
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
        
        console.log('✅ Language switched to:', lang);
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
        console.log('🌐 Applying language:', lang);
        const currentTranslations = this.translations[lang];
        if (!currentTranslations) {
            console.error('❌ No translations found for language:', lang);
            return;
        }

        // Update page title
        this.updatePageTitle(lang, currentTranslations);

        // Comprehensive text translation with better targeting
        this.translateAllElements(currentTranslations);
        
        console.log('✅ Language applied:', lang);
    },

    // Update page title based on language
    updatePageTitle: function(lang, translations) {
        const originalTitle = document.title;
        
        if (lang === 'nl' && originalTitle.includes('Discover Tomorrow\'s Technology Today')) {
            document.title = originalTitle.replace('Discover Tomorrow\'s Technology Today', 'Ontdek De Technologie Van Morgen Vandaag');
        } else if (lang === 'en' && originalTitle.includes('Ontdek De Technologie Van Morgen Vandaag')) {
            document.title = originalTitle.replace('Ontdek De Technologie Van Morgen Vandaag', 'Discover Tomorrow\'s Technology Today');
        }
        
        // Handle other page titles
        const pageTitleMap = {
            'My Account': translations['My Account'],
            'Shopping Cart': translations['Cart'],
            'Checkout': translations['Checkout'],
            'Shop': translations['Shop'],
            'About Us': translations['About Us'],
            'Contact': translations['Contact'],
            'Deals': translations['Deals']
        };
        
        Object.keys(pageTitleMap).forEach(key => {
            if (document.title.includes(key) && pageTitleMap[key]) {
                document.title = document.title.replace(key, pageTitleMap[key]);
            }
        });
    },

    // More comprehensive and reliable translation function
    translateAllElements: function(translations) {
        console.log('🔄 Starting comprehensive translation...');
        
        // Track translation count for debugging
        let translationCount = 0;
        
        // Define elements to translate with specific selectors
        const translatableSelectors = [
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',  // All headings
            'p',                                   // Paragraphs
            'span:not(.logo-text)',               // Spans but not logo
            'a',                                  // Links
            'button',                             // Buttons
            'label',                              // Labels
            '.nav-link',                          // Navigation links
            '.btn span',                          // Button text
            '.category-title',                    // Category titles
            '.category-description',              // Category descriptions
            '.section-title',                     // Section titles
            '.section-subtitle',                  // Section subtitles
            '.hero-subtitle',                     // Hero subtitle
            '.trust-title',                       // Trust indicator titles
            '.trust-description',                 // Trust descriptions
            '.footer-title',                      // Footer titles
            '.badge'                              // Badges
        ];

        // Process each selector
        translatableSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                const originalText = this.getCleanText(element);
                if (originalText && translations[originalText]) {
                    this.updateElementText(element, translations[originalText]);
                    translationCount++;
                    console.log(`✅ Translated "${originalText}" → "${translations[originalText]}"`);
                }
            });
        });
        
        // Handle special cases - elements that might have partial matches
        this.handleSpecialTranslations(translations);
        
        // Handle form placeholders
        document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(element => {
            const placeholder = element.getAttribute('placeholder');
            if (translations[placeholder]) {
                element.setAttribute('placeholder', translations[placeholder]);
                translationCount++;
            }
        });
        
        console.log(`✅ Translation complete. ${translationCount} elements translated.`);
    },

    // Get clean text from element (without extra whitespace)
    getCleanText: function(element) {
        // Skip if element has child elements (composite content)
        if (element.children.length > 0) {
            // For elements with icons, get text without icon
            const icon = element.querySelector('i.fas, i.far, i.fab');
            if (icon) {
                const cloned = element.cloneNode(true);
                const clonedIcon = cloned.querySelector('i.fas, i.far, i.fab');
                if (clonedIcon) {
                    clonedIcon.remove();
                }
                return cloned.textContent.trim();
            }
            return '';
        }
        
        return element.textContent.trim();
    },

    // Update element text while preserving icons
    updateElementText: function(element, newText) {
        const icon = element.querySelector('i.fas, i.far, i.fab');
        if (icon) {
            // Preserve icon
            element.innerHTML = icon.outerHTML + ' ' + newText;
        } else {
            element.textContent = newText;
        }
    },

    // Handle special translation cases
    handleSpecialTranslations: function(translations) {
        // Handle hero title specifically (it's split across elements)
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const spans = heroTitle.querySelectorAll('span');
            const textNodes = [];
            
            // Get all text nodes
            for (let node of heroTitle.childNodes) {
                if (node.nodeType === Node.TEXT_NODE) {
                    textNodes.push(node);
                }
            }
            
            // Translate individual parts
            textNodes.forEach(node => {
                const text = node.textContent.trim();
                if (translations[text]) {
                    node.textContent = node.textContent.replace(text, translations[text]);
                }
            });
            
            // Translate spans
            spans.forEach(span => {
                const text = span.textContent.trim();
                if (translations[text]) {
                    span.textContent = translations[text];
                }
            });
        }
        
        // Handle navigation menu items specifically
        document.querySelectorAll('.nav-link').forEach(link => {
            const text = link.textContent.trim();
            if (translations[text]) {
                link.textContent = translations[text];
            }
        });
    },

    // Translate function for other scripts to use
    translate: function(text) {
        const currentLang = localStorage.getItem('selectedLanguage') || 'nl';
        const translations = this.translations[currentLang];
        return translations && translations[text] ? translations[text] : text;
    }
};

// Auto-initialize when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM loaded, initializing Language System...');
    if (window.LanguageSystem) {
        LanguageSystem.init();
    } else {
        console.error('❌ LanguageSystem not found');
    }
});

// Also try immediate initialization if DOM is already loaded
if (document.readyState !== 'loading') {
    console.log('🚀 DOM already loaded, initializing Language System immediately...');
    if (window.LanguageSystem) {
        LanguageSystem.init();
    }
}
