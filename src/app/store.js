// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';

import storage from 'redux-persist/lib/storage'; // uses localStorage
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['auth'], // only auth will be persisted
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // redux-persist needs this
    }),
});

export const persistor = persistStore(store);
