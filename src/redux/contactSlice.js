import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_CONTACTS } from './constants';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_CONTACTS,
  reducers: {
    addContact(state, action) {},
    deleteContact(state, action) {},
  },
});

export const contactsReducer = contactSlice.reducer;
