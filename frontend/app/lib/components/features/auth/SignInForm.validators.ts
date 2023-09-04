import { RegisterOptions } from 'react-hook-form';

export type SignInFormData = {
  identifier: string;
  password: string;
};

export const identifierOpt: RegisterOptions<SignInFormData, 'identifier'> = {
  required: { message: 'Benutzername/Email wird benötigt', value: true },
  minLength: { message: 'Mindestens 3 Zeichen lang', value: 3 },
};

export const passwordOpt: RegisterOptions<SignInFormData, 'password'> = {
  required: { message: 'Passwort wird benötigt', value: true },
  minLength: { message: 'Mindestens 6 Zeichen lang', value: 6 },
};
