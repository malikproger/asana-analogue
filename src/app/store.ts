import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { api } from '../api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
