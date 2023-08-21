import { RegisterOptions } from 'react-hook-form';

export type SignUpFormData = {
  email: string;
  username: string;
  password: string;
};

export const emailOpt: RegisterOptions<SignUpFormData, 'email'> = {
  required: { message: 'Email is required', value: true },
  pattern: { message: 'Not a valid email', value: /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm },
};

export const usernameOpt: RegisterOptions<SignUpFormData, 'username'> = {
  required: { message: 'Username is required', value: true },
  minLength: { message: 'Must be a minimum of 3 characters', value: 3 },
};

export const passwordOpt: RegisterOptions<SignUpFormData, 'password'> = {
  required: { message: 'Password is required', value: true },
  minLength: { message: 'Must be a minimum of 6 characters', value: 6 },
};
