import { useState } from 'react';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const logGoogleUser = async () => {
    setIsLoading(true);
    try {
      const response = await signInWithGooglePopup();
      console.log(response);
    } catch (error) {
      console.error('Error during sign-in:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={logGoogleUser} disabled={isLoading}>
        {isLoading ? 'Signing in...' : 'Sign in with Google'}
      </button>
      <h1>Sign-In Page</h1>
    </div>
  );
};

export default SignIn;
