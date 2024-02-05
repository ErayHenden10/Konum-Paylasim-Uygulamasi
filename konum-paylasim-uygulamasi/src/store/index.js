import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import kullaniciReducer from './kullaniciSlice';
import { thunk } from 'redux-thunk';

export const store = configureStore({
  reducer: {
    kullanici: kullaniciReducer,
   
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
