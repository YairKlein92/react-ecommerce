import './sign-up-form.styles.scss';
import React, { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const [error, setError] = useState(null); // For error handling
  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password,
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormField();

      console.log('User successfully created:', user);
    } catch (err) {
      // Use 'err', not 'error'
      if (err.code === 'auth/email-already-in-use') {
        // Correct usage
        alert('Email already in use');
      } else {
        console.log('Error during user creation:', err.message);
        setError('Error creating user: ' + err.message); // Update error state
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Dont have an account?</h2>
      <span>Sign up with your email and password</span>
      {error && <p style={{ color: 'red' }}>{error}</p>}{' '}
      {/* Display error message */}
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          id="displayName"
          name="displayName"
          value={displayName}
          required
          type="text"
          onChange={handleChange}
        />

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

        <FormInput
          label="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button buttonType="inverted" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
