import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { authService } from '../../api';
import { User } from '../../types';

type InitialState = {
  user: User | null;
  isAuthenticating: boolean;
  isAuthenticated: boolean;
};

const initialState: InitialState = {
  user: null,
  isAuthenticating: true,
  isAuthenticated: false,
};

const { login, registration, logout, refresh } = authService.endpoints;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addMatcher(
        isAnyOf(
          login.matchPending,
          registration.matchPending,
          logout.matchPending,
          refresh.matchPending,
        ),
        (state) => {
          state.isAuthenticating = true;
        },
      )
      .addMatcher(
        isAnyOf(
          login.matchRejected,
          registration.matchRejected,
          logout.matchRejected,
          refresh.matchRejected,
        ),
        (state) => {
          state.isAuthenticating = false;
        },
      )
      .addMatcher(
        isAnyOf(login.matchFulfilled, registration.matchFulfilled, refresh.matchFulfilled),
        (state, action) => {
          state.user = action.payload.user;
          state.isAuthenticating = false;
          state.isAuthenticated = true;
        },
      )
      .addMatcher(authService.endpoints.logout.matchFulfilled, (state) => {
        state.user = initialState.user;
        state.isAuthenticating = false;
        state.isAuthenticated = false;
      });
  },
});

export default authSlice.reducer;
