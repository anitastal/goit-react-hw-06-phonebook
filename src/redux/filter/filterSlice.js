import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilterAction: (_, action) => {
      return action.payload;
    },
  },
});

export const { changeFilterAction } = filterSlice.actions;

export default filterSlice.reducer;
