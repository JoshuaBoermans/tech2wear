// Firebase Configuration - Tech2Wear

// Import the functions you need from the SDKs you need
// Using Firebase v9 compat mode
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlZKPyTIB5Iq_OPNC-QquhNORQkuqx6NI",
  authDomain: "tech2wear-accounts.firebaseapp.com",
  projectId: "tech2wear-accounts",
  storageBucket: "tech2wear-accounts.firebasestorage.app",
  messagingSenderId: "191787483716",
  appId: "1:191787483716:web:3b54a73876fabc0d463211"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services - GLOBAAL MAKEN
window.auth = firebase.auth();
window.db = firebase.firestore();

// Global user state
let currentUser = null;

// 🔥 GLOBALE SHOWNOTIFICATION FUNCTIE
window.showNotification = function(message, type = 'info', duration = 5000) {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="notification-icon fas ${getNotificationIcon(type)}"></i>
            <span class="notification-message">${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add notification styles if not present
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 2rem;
                right: 2rem;
                min-width: 300px;
                max-width: 500px;
                padding: 1rem;
                border-radius: 12px;
                color: white;
                font-weight: 500;
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: space-between;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                animation: slideIn 0.3s ease;
                font-family: 'Open Sans', sans-serif;
            }
            .notification-success { background: #00ff88; color: #0a0a0a; }
            .notification-error { background: #ff3860; }
            .notification-warning { background: #ff9500; color: #0a0a0a; }
            .notification-info { background: #00ffff; color: #0a0a0a; }
            .notification-content { display: flex; align-items: center; gap: 0.75rem; }
            .notification-close { 
                background: none; border: none; color: inherit; 
                font-size: 1rem; cursor: pointer; padding: 0.25rem;
                border-radius: 50%; transition: background 0.2s;
            }
            .notification-close:hover { background: rgba(0,0,0,0.1); }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @media (max-width: 768px) {
                .notification { 
                    top: 1rem; right: 1rem; left: 1rem; 
                    min-width: auto; max-width: none; 
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }
    }, duration);
}

function getNotificationIcon(type) {
    switch(type) {
        case 'success': return 'fa-check-circle';
        case 'error': return 'fa-exclamation-circle';
        case 'warning': return 'fa-exclamation-triangle';
        default: return 'fa-info-circle';
    }
}

// UI Updates voor ingelogde gebruiker
function updateUIForLoggedInUser(user) {
    const accountLinks = document.querySelectorAll('a[href*="account.html"]');
    accountLinks.forEach(link => {
        link.href = getCorrectPath('pages/account/account.html');
        link.title = `Ingelogd als ${user.displayName || user.email}`;
    });
    
    addLogoutToMobileMenu();
    
    if (window.TechCart && typeof window.TechCart.setUserId === 'function') {
        window.TechCart.setUserId(user.uid);
    }
}

// UI Updates voor niet-geverifieerde gebruiker
function updateUIForUnverifiedUser(user) {
    window.showNotification('Verifieer je email adres om volledige toegang te krijgen', 'warning');
    
    const accountLinks = document.querySelectorAll('a[href*="account.html"]');
    accountLinks.forEach(link => {
        link.href = getCorrectPath('pages/account/verify.html');
        link.title = 'Email verificatie vereist';
    });
}

// UI Updates voor uitgelogde gebruiker
function updateUIForLoggedOutUser() {
    const accountLinks = document.querySelectorAll('a[href*="account.html"]');
    accountLinks.forEach(link => {
        link.href = getCorrectPath('pages/account/login.html');
        link.title = 'Inloggen of account aanmaken';
    });
    
    const logoutLink = document.querySelector('.logout-link');
    if (logoutLink) {
        logoutLink.remove();
    }
    
    if (window.TechCart && typeof window.TechCart.setUserId === 'function') {
        window.TechCart.setUserId(null);
    }
    
    sessionStorage.removeItem('userProfile');
}

// Load user profile from Firestore
async function loadUserProfile(userId) {
    try {
        const doc = await db.collection('users').doc(userId).get();
        if (doc.exists) {
            const userData = doc.data();
            sessionStorage.setItem('userProfile', JSON.stringify(userData));
            
            if (!auth.currentUser.displayName && userData.firstName) {
                await auth.currentUser.updateProfile({
                    displayName: `${userData.firstName} ${userData.lastName}`
                });
            }
        }
    } catch (error) {
        console.error('❌ Error loading user profile:', error);
    }
}

// Add logout to mobile menu
function addLogoutToMobileMenu() {
    const mobileNav = document.querySelector('.mobile-menu-nav');
    if (mobileNav && !mobileNav.querySelector('.logout-link')) {
        const logoutLink = document.createElement('a');
        logoutLink.href = '#';
        logoutLink.className = 'mobile-nav-link logout-link';
        logoutLink.innerHTML = '<i class="fas fa-sign-out-alt"></i> Uitloggen';
        logoutLink.onclick = function(e) {
            e.preventDefault();
            window.logoutUser();
        };
        mobileNav.appendChild(logoutLink);
    }
}

// Logout function - GLOBAAL MAKEN
window.logoutUser = async function() {
    try {
        await auth.signOut();
        sessionStorage.clear();
        window.showNotification('✅ Succesvol uitgelogd', 'success');
        
        if (window.location.pathname.includes('account') && 
            !window.location.pathname.includes('login') && 
            !window.location.pathname.includes('register')) {
            window.location.href = getCorrectPath('../../index.html');
        }
    } catch (error) {
        console.error('❌ Logout error:', error);
        window.showNotification('Fout bij uitloggen', 'error');
    }
}

// Smart path resolution
function getCorrectPath(relativePath) {
    const currentPath = window.location.pathname;
    const depth = (currentPath.match(/\//g) || []).length - 1;
    
    if (depth === 1) return relativePath;
    if (depth === 2) return '../' + relativePath;
    if (depth === 3) return '../../' + relativePath;
    
    return relativePath;
}

// Auth state management - NA showNotification definitie
auth.onAuthStateChanged(function(user) {
    currentUser = user;
    
    if (user && user.emailVerified) {
        console.log('✅ User logged in:', user.email);
        updateUIForLoggedInUser(user);
        loadUserProfile(user.uid);
    } else if (user && !user.emailVerified) {
        console.log('⚠️ User needs email verification');
        updateUIForUnverifiedUser(user);
    } else {
        console.log('❌ User logged out');
        updateUIForLoggedOutUser();
    }
});

console.log('🔥 Firebase initialized successfully');
