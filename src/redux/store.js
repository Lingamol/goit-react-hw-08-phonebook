// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';
// import { contactsReducer, filtersReducer } from './reducer';
// import { persistStore } from 'redux-persist';
// import {
//   persistStore,
//   // persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// // import storage from 'redux-persist/lib/storage';
// import { persistedContactsReducer } from './contactsSlice';
// import { persistedFiltersReducer } from './filtersSlice';

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
});
