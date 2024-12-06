import { getRedirectResult } from 'firebase/auth';
import { useEffect, useState } from 'react';
import SignInForm from '../../components/sign-in/sign-in-form.component';
import SignUpForm from '../../components/sign-up/sign-up-form.component';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';

const Authentication = () => {
  return (
    <div>
      <h1>Sign-In Page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
