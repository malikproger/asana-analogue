import { AuthResponse } from '../../types';
import { api } from '../api';

export const authService = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthResponse, { email: string; password: string }>({
      query: (userData) => ({
        url: '/login',
        method: 'POST',
        body: userData,
      }),
    }),
    registration: build.mutation<AuthResponse, { email: string; password: string }>({
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
    refresh: build.query<AuthResponse, void>({
      queryFn: async (arg, api, extraOptions, baseQuery) => {
        const token = localStorage.getItem('token');

        if (!token) {
          return { error: { status: 'CUSTOM_ERROR', data: 'Token not found' } };
        }

        const result = await baseQuery({
          url: '/refresh',
          method: 'GET',
        });

        return result;
      },
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation, useLogoutMutation, useRefreshQuery } =
  authService;

export const {
  endpoints: { login, registration, logout, refresh },
} = authService;
