import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../app/store';
import { API_URL } from '../consts';
import { AuthResponse } from '../types';
import { logout, refresh } from './authActions';

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: 'include',
  prepareHeaders(headers, { getState }) {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithTest: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  baseQueryApi,
  extraOptions,
) => {
  let result = await baseQuery(args, baseQueryApi, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery('/refresh', baseQueryApi, extraOptions);

    if (refreshResult.data) {
      baseQueryApi.dispatch(refresh(refreshResult.data as AuthResponse));
      result = await baseQuery(args, baseQueryApi, extraOptions);
    } else {
      baseQueryApi.dispatch(logout());
    }
  }

  return result;
};

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithTest,
  endpoints: () => ({}),
});
