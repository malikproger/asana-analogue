import { AuthResponse } from '../../types';
import { api } from '../api';

export const authService = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<{ email: string; password: string }, AuthResponse>({
      query: (userData) => ({
        url: '/login',
        method: 'POST',
        body: userData,
      }),
    }),
    registration: build.mutation<{ email: string; password: string; name: string }, AuthResponse>({
      query: (userData) => ({
        url: '/registration',
        method: 'POST',
        body: userData,
      }),
    }),
    logout: build.mutation({
      query: (userData) => ({
        url: '/logout',
        method: 'POST',
        body: userData,
      }),
    }),
    refresh: build.query<void, AuthResponse>({
      query: () => ({
        url: '/refresh',
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation, useLogoutMutation, useRefreshQuery } =
  authService;

export const {
  endpoints: { login, registration, logout, refresh },
} = authService;
