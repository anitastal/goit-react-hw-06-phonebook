import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactAction: (state, action) => {
      if (
        state.items.some(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase()
        )
      ) {
        return alert(`${action.payload.name} is already in contacts`);
      }
      state.items = [...state.items, action.payload];
    },
    deleteContactAction: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContactAction, deleteContactAction } = contactsSlice.actions;
export default contactsSlice.reducer;
