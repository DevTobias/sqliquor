import { RegisterOptions } from 'react-hook-form';

export type SignInFormData = {
  identifier: string;
  password: string;
};

export const identifierOpt: RegisterOptions<SignInFormData, 'identifier'> = {
  required: { message: 'Identifier is required', value: true },
  minLength: { message: 'Must be a minimum of 3 characters', value: 3 },
};

export const passwordOpt: RegisterOptions<SignInFormData, 'password'> = {
  required: { message: 'Password is required', value: true },
  minLength: { message: 'Must be a minimum of 6 characters', value: 6 },
};
