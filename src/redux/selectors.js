import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;

export const getFilteredConctacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {}
);
