import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import contacts from 'components/contacts';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [...contacts],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteContact: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
