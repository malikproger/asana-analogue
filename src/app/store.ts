import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { api } from '../api';
import auth from '../slices/authSlice';
import task from '../slices/taskSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth,
    task,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
