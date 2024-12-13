import './sign-in-form.styles.scss';
import React, { useState } from 'react'; // no need for useContext
// import { UserContext } from '../../contexts/user.context';   no longer needed bc of the Context
import {
  signInWithGooglePopup,
  singInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  // const { setCurrentUser } = useContext(UserContext);   no longer needed bc of the Context
  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    // const { user } = no longer needed bc of the Context
    await signInWithGooglePopup();
    // setCurrentUser(user);   no longer needed bc of the Context
    // moved to user-context.jsx
    // await createUserDocumentFromAuth();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await singInAuthUserWithEmailAndPassword(
        email,
        password,
      );
      // setCurrentUser(user);    no longer needed bc of the Context
      resetFormField();
    } catch (err) {
      console.error('Error signing in:', err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit">
            Sign in
          </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
