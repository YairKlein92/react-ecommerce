import { createContext, useEffect, useState } from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
} from '../utils/firebase/firebase.utils';

// actual value I wanna access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUSer: () => null,
});
// app's UI components.
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    // stop listening
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        // taken from sign-in-form
        // If a user signs in, we create a document in the database for them (if it doesn't exist already).
        // This makes sure their info is saved.
        createUserDocumentFromAuth(user);
      }
      console.log(user);
      setCurrentUser(user);
    });
    // Cleanup function: If this component is removed, stop the listener to save memory.

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
