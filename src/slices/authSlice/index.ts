import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { authService } from '../../api';
import { RootState } from '../../app/store';
import { User } from '../../types';

type InitialState = {
  user: User | null;
  isAuthenticating: boolean;
  isAuthenticated: boolean;
  token: string | null;
};

const initialState: InitialState = {
  user: null,
  isAuthenticating: true,
  isAuthenticated: false,
  token: localStorage.getItem('token'),
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
          state.token = action.payload.accessToken;
          localStorage.setItem('token', action.payload.accessToken);
        },
      )
      .addMatcher(authService.endpoints.logout.matchFulfilled, (state) => {
        state.user = null;
        state.isAuthenticating = false;
        state.isAuthenticated = false;
        state.token = null;
        localStorage.removeItem('token');
      });
  },
});

export default authSlice.reducer;

export const selectUser = (state: RootState) => state.auth.user;

export const selectIsAuthenticating = (state: RootState) => state.auth.isAuthenticating;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
