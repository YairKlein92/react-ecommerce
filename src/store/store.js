import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

// 🔹 1. Persist config to store cart state
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], // Only persist the cart
};

// 🔹 2. Create the Saga middleware
const sagaMiddleware = createSagaMiddleware();

// 🔹 3. Wrap the rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 🔹 4. Define middlewares (conditionally include logger in development)
const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware,
].filter(Boolean); // Removes false values

// 🔹 5. Enable Redux DevTools if available
const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// 🔹 6. Apply middlewares to the store
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// 🔹 7. Create the Redux store
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers,
);

// 🔹 8. Run the Redux Saga middleware
sagaMiddleware.run(rootSaga);

// 🔹 9. Create the persisted store
export const persistor = persistStore(store);
