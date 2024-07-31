import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import initialContacts from '../contacts.json'; 

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'], 
};

const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReducer);

const store = configureStore({
    reducer: {
      contacts: persistedContactsReducer,
      filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    preloadedState: {
      contacts: {
        items: JSON.parse(localStorage.getItem('contacts')) || initialContacts, 
      },
    },
  });

export const persistor = persistStore(store);
export default store;
