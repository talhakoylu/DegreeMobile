import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    token: null,
  },
  reducers: {
    setCredentials: (state, {payload: {data, token}}) => {
      state.user = data;
      state.token = token;
      state.isLoggedIn = true;
    },
    setUser: (state, {payload}) => {
      state.user = payload;
    },
    loggedOut: state => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const {setCredentials, loggedOut, setUser} = slice.actions;

export default slice.reducer;

export const selectCurrentUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
