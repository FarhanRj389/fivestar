import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDcfLFqFYrqkDNdXPhmgeTOZx0UfGvc9AI",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "fivestarrentals-78855.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "fivestarrentals-78855",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "fivestarrentals-78855.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1081476639124",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1081476639124:web:27d627f674b661da088781",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-7L653PDMEV"
};

// Initialize Firebase
let app;
try {
  app = initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully');
  console.log('Project ID:', firebaseConfig.projectId);
  console.log('Auth Domain:', firebaseConfig.authDomain);
  console.log('Environment:', import.meta.env.VITE_APP_ENV || 'development');
} catch (error) {
  console.error('Firebase initialization error:', error);
  throw error;
}

// Initialize Firebase services (only Auth and Firestore, no Storage)
export const auth = getAuth(app);
export const db = getFirestore(app);

// Test Firebase connection
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('User is signed in:', user.email);
  } else {
    console.log('User is signed out');
  }
});

export default app;
