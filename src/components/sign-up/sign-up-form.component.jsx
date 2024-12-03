import React, { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

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
      // after creatign user, delete form
      resetFormField();

      console.log('User successfully created:', user);
      // Optionally, you could redirect to another page or handle the user further here
    } catch (err) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      } else {
        console.log('Error during user creation:', err.message);
        setError('Error creating user: ' + err.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}{' '}
      {/* Display error message */}
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="displayName">Display name</label>
        <input
          id="displayName"
          name="displayName"
          value={displayName}
          required
          type="text"
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          value={confirmPassword}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
