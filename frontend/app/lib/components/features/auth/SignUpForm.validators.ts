import { RegisterOptions } from 'react-hook-form';

export type SignUpFormData = {
  email: string;
  username: string;
  password: string;
};

export const emailOpt: RegisterOptions<SignUpFormData, 'email'> = {
  required: { message: 'Email wird benötigt', value: true },
  pattern: { message: 'Email ist ungültig', value: /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm },
};

export const usernameOpt: RegisterOptions<SignUpFormData, 'username'> = {
  required: { message: 'Nutzername wird benötigt', value: true },
  minLength: { message: 'Mindestens 3 Zeichen lang', value: 3 },
};

export const passwordOpt: RegisterOptions<SignUpFormData, 'password'> = {
  required: { message: 'Password wird benötigt', value: true },
  minLength: { message: 'Mindestens 6 Zeichen lang', value: 6 },
};
