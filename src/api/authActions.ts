import { createAction } from '@reduxjs/toolkit';
import { AuthResponse } from '../types';

export const refresh = createAction<AuthResponse>('/refresh');
export const logout = createAction('/logout');
