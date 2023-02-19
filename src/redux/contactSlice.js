import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_CONTACTS } from './constants';
// import { INITIAL_CONTACTS } from './constants';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_CONTACTS,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const contactsReducer = contactSlice.reducer;

export const { addContact, deleteContact } = contactSlice.actions;
