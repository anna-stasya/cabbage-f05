import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  balance: null,
  isLoggedIn: false,
  isGoogleSigned: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      console.log('register', action.payload);

      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.isGoogleSigned = true;
      // state.isGoogleSigned = action.payload.token;
    },
    [authOperations.logIn.fulfilled](state, action) {
      console.log('login', action);
      if (action.payload === undefined) {
        return;
      }
      state.balance = action.payload.balance;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isGoogleSigned = true;
      //state.isGoogleSigned = action.payload.token;
    },

    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isGoogleSigned = false;
      //state.isGoogleSigned = action.payload.token
    },
    // [authOperations.CurrentUser.fulfilled](state, action) {
    //   state.CurrentUser = action.payload.user
    // }
  },
});

export default authSlice.reducer;
