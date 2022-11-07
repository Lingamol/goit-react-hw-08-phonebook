import { createSlice } from '@reduxjs/toolkit';

// import { nanoid } from 'nanoid';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
const contactsInitialState = {
  contactList: [],
  isLoading: false,
  error: null,
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactList = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { fetchingInProgress, fetchingSuccess, fetchingError, setFilter } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
