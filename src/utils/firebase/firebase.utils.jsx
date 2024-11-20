// import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  // it is ok to share this api key
  apiKey: 'AIzaSyA9QwLG3CCNPrsaEQ6n8U4GxHEIX_WgFqI',
  authDomain: 'ecommerce-store-9a133.firebaseapp.com',
  projectId: 'ecommerce-store-9a133',
  storageBucket: 'ecommerce-store-9a133.firebasestorage.app',
  messagingSenderId: '676028009595',
  appId: '1:676028009595:web:a0fd6995c709a0a04926de',
  measurementId: 'G-34G323RG0Y',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
