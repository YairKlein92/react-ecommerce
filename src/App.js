import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import { setCurrentUser } from './store/user/user.action';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from './utils/firebase/firebase.utils';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // stop listening
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        // taken from sign-in-form
        // If a user signs in, we create a document in the database for them (if it doesn't exist already).
        // This makes sure their info is saved.
        createUserDocumentFromAuth(user);
      }
      console.log(user);
      dispatch(setCurrentUser(user));
    });
    // Cleanup function: If this component is removed, stop the listener to save memory.

    return unsubscribe;
  }, [dispatch]); // Adding dispatch removes the message, but it is not needed, without this is also working just fine

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
