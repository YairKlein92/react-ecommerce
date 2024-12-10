// import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  writeBatch,
} from 'firebase/firestore';

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
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log('done');
};
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {},
) => {
  // if there is no userAuth, exit
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // if user data doesnt exist
  // create / set the doc with the data from useruth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  //  if user data exists return
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return null;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential;
  } catch (error) {
    console.error('Error creating user:', error.message);
    throw error;
  }
};

export const singInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return null;

  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = () => {
  signOut(auth);
};
// https://firebase.google.com/docs/auth/web/manage-users
export const onAuthStateChangeListener = (callback) =>
  onAuthStateChanged(auth, callback);
