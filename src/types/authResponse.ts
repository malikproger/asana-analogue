import { User } from './';

export type AuthResponse = {
  accessToken: string;
  user: User;
};
