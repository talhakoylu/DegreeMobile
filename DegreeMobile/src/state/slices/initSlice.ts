import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'init',
  initialState: {
  },
  reducers: {
    setInit: (state, {payload}) => {
    },
  },
});

export const {setInit} = slice.actions;

export default slice.reducer;

export const selectInit = state => state.init;
