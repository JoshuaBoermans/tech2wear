// Authentication Module voor Tech2Wear
window.TechAuth = {
    
    // Registreer nieuwe gebruiker met e-mail verificatie
    register: async function(email, password, displayName) {
        try {
            console.log('Registratie gestart voor:', email);
            
            // Maak account aan
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            
            // Update profiel met naam
            if (displayName) {
                await user.updateProfile({ displayName: displayName });
            }
            
            // Verstuur verificatie e-mail
            await user.sendEmailVerification({
                url: window.location.origin + '/account/verified.html',
                handleCodeInApp: false // Firebase handelt verificatie af
            });
            
            // Sla gebruikersgegevens op in Firestore
            await this.createUserDocument(user, { displayName });
            
            console.log('Account aangemaakt en verificatie e-mail verstuurd');
            
            return {
                success: true,
                message: 'Account succesvol aangemaakt! Controleer je e-mail voor verificatie.',
                user: user,
                needsVerification: true
            };
            
        } catch (error) {
            console.error('Registratie fout:', error);
            return {
                success: false,
                message: this.getErrorMessage(error.code),
                error: error
            };
        }
    },
    
    // Login met verificatie check
    login: async function(email, password) {
        try {
            const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
            const user = userCredential.user;
            
            // Herlaad gebruiker om laatste status te krijgen
            await user.reload();
            
            return {
                success: true,
                user: user,
                emailVerified: user.emailVerified,
                message: user.emailVerified ? 
                    'Succesvol ingelogd!' : 
                    'Login succesvol, maar e-mail nog niet geverifieerd.'
            };
            
        } catch (error) {
            console.error('Login fout:', error);
            return {
                success: false,
                message: this.getErrorMessage(error.code)
            };
        }
    },
    
    // Verstuur verificatie e-mail opnieuw
    sendEmailVerification: async function() {
        try {
            const user = firebase.auth().currentUser;
            
            if (!user) {
                throw new Error('Geen gebruiker ingelogd');
            }
            
            // Herlaad eerst om laatste status te krijgen
            await user.reload();
            
            if (user.emailVerified) {
                return {
                    success: false,
                    message: 'E-mail is al geverifieerd'
                };
            }
            
            await user.sendEmailVerification({
                url: window.location.origin + '/account/verified.html',
                handleCodeInApp: false
            });
            
            return {
                success: true,
                message: 'Verificatie e-mail opnieuw verstuurd! Controleer je inbox.'
            };
            
        } catch (error) {
            console.error('Fout bij versturen verificatie e-mail:', error);
            return {
                success: false,
                message: this.getErrorMessage(error.code)
            };
        }
    },
    
    // Controleer e-mail verificatie status
    checkEmailVerification: async function() {
        const user = firebase.auth().currentUser;
        if (!user) {
            return { isVerified: false, message: 'Niet ingelogd' };
        }
        
        try {
            // Herlaad gebruiker om laatste status te krijgen
            await user.reload();
            
            if (user.emailVerified) {
                // Update Firestore
                await this.updateEmailVerificationStatus(user);
            }
            
            return {
                isVerified: user.emailVerified,
                email: user.email,
                user: user,
                message: user.emailVerified ? 
                    'E-mail is geverifieerd' : 
                    'E-mail nog niet geverifieerd'
            };
        } catch (error) {
            console.error('Fout bij controleren verificatie:', error);
            return {
                isVerified: false,
                message: 'Fout bij controleren verificatie status'
            };
        }
    },
    
    // Maak gebruiker document in Firestore
    createUserDocument: async function(user, additionalData = {}) {
        try {
            const userRef = firebase.firestore().collection('users').doc(user.uid);
            
            const userData = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName || additionalData.displayName || '',
                emailVerified: user.emailVerified,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                lastLoginAt: firebase.firestore.FieldValue.serverTimestamp(),
                ...additionalData
            };
            
            await userRef.set(userData, { merge: true });
            console.log('Gebruiker document aangemaakt in Firestore');
            
        } catch (error) {
            console.error('Fout bij aanmaken gebruiker document:', error);
        }
    },
    
    // Update verificatie status in Firestore
    updateEmailVerificationStatus: async function(user) {
        try {
            if (!user) return;
            
            const userRef = firebase.firestore().collection('users').doc(user.uid);
            await userRef.update({
                emailVerified: user.emailVerified,
                emailVerifiedAt: user.emailVerified ? firebase.firestore.FieldValue.serverTimestamp() : null,
                lastLoginAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            
            console.log('E-mail verificatie status bijgewerkt in Firestore');
            
        } catch (error) {
            console.error('Fout bij bijwerken verificatie status:', error);
        }
    },
    
    // Logout functionaliteit
    logout: async function() {
        try {
            await firebase.auth().signOut();
            return { success: true, message: 'Succesvol uitgelogd' };
        } catch (error) {
            return { success: false, message: 'Fout bij uitloggen' };
        }
    },
    
    // Nederlandse foutberichten
    getErrorMessage: function(errorCode) {
        const errorMessages = {
            'auth/email-already-in-use': 'Dit e-mailadres is al in gebruik.',
            'auth/weak-password': 'Wachtwoord moet minimaal 6 karakters bevatten.',
            'auth/invalid-email': 'Ongeldig e-mailadres.',
            'auth/user-not-found': 'Gebruiker niet gevonden.',
            'auth/wrong-password': 'Onjuist wachtwoord.',
            'auth/too-many-requests': 'Te veel pogingen. Probeer later opnieuw.',
            'auth/network-request-failed': 'Netwerkfout. Controleer je internetverbinding.',
            'auth/user-disabled': 'Dit account is uitgeschakeld.',
            'auth/operation-not-allowed': 'Deze bewerking is niet toegestaan.',
            'auth/invalid-action-code': 'Ongeldige verificatiecode.',
            'auth/expired-action-code': 'Verificatiecode is verlopen.'
        };
        
        return errorMessages[errorCode] || 'Er is een onbekende fout opgetreden.';
    }
};

// Authentication State Observer
firebase.auth().onAuthStateChanged(async (user) => {
    console.log('Auth state changed:', user ? user.email : 'Niet ingelogd');
    
    if (user) {
        // Herlaad gebruiker om laatste verificatie status te krijgen
        await user.reload();
        
        // Update Firestore
        await TechAuth.updateEmailVerificationStatus(user);
        
        // Trigger custom event voor UI updates
        window.dispatchEvent(new CustomEvent('authStateChanged', { 
            detail: { 
                user: user, 
                emailVerified: user.emailVerified,
                isAuthenticated: true
            } 
        }));
    } else {
        window.dispatchEvent(new CustomEvent('authStateChanged', { 
            detail: { 
                user: null, 
                emailVerified: false,
                isAuthenticated: false
            } 
        }));
    }
});
