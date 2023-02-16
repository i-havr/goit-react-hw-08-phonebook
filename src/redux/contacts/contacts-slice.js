import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addContact.pending, state => {
        return { ...state, isLoading: true, error: null };
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        return {
          ...state,
          items: [...state.items, payload],
          isLoading: false,
          error: null,
        };
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        return { ...state, isLoading: false, error: payload };
      })
      .addCase(deleteContact.pending, state => {
        return { ...state, isLoading: true, error: null };
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        return {
          ...state,
          items: state.items.filter(({ id }) => id !== payload.id),
          isLoading: false,
          error: null,
        };
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        return { ...state, isLoading: false, error: payload };
      });
  },
});

export default contactsSlice.reducer;
