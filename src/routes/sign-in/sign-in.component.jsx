import { getRedirectResult } from 'firebase/auth';
import { useEffect, useState } from 'react';
import SignUpForm from '../../components/sign-up/sign-up-form.component';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  // needs debugging.. 009
  // useEffect(async () => {
  //   // get the response from the redirect -> otherwise it won't happen autoamtically.
  //   const response = await getRedirectResult(auth);
  //   console.log(response);
  // }, []);

  const logGoogleUser = async () => {
    setIsLoading(true);
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
      console.log('user In sign in component', user);
    } catch (error) {
      console.error('Error during sign-in:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={logGoogleUser} disabled={isLoading}>
        {isLoading ? 'Signing in...' : 'Sign in with Google Popup'}
      </button>
      <button onClick={signInWithGoogleRedirect} disabled={isLoading}>
        {isLoading ? 'Signing in...' : 'Sign in with Google Redirect'}
      </button>
      <SignUpForm />
      <h1>Sign-In Page</h1>
    </div>
  );
};

export default SignIn;
