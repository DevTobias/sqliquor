import { FC, HTMLAttributes } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '$lib/components/Button';
import { SignUpFormData, emailOpt, passwordOpt, usernameOpt } from '$lib/components/features/auth/SignUpForm.validators';
import { Switcher } from '$lib/components/features/auth/Switcher';
import Input from '$lib/components/Input';
import { useAuthStore } from '$lib/store/auth.store';
import { classNames } from '$lib/utils/classNames';

import styles from './AuthForm.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  onSwitch: VoidFunction;
  onSuccess: VoidFunction;
}

export const SignUpForm: FC<Props> = ({ className, onSwitch, onSuccess, ...rest }) => {
  const { signup } = useAuthStore((s) => ({ signup: s.signup }));
  const { register, formState, handleSubmit } = useForm<SignUpFormData>();
  const { username, email, password } = formState.errors;

  const onSubmit = handleSubmit(async (data) => {
    const signUpPromise = signup(data).then(onSuccess);

    await toast.promise(signUpPromise, {
      loading: 'Nutzerkonto anlegen...',
      success: 'Konto erfolgreich angelegt.',
      error: 'Dieses Konto existiert bereits.',
    });
  });

  return (
    <div className={classNames(styles['form-container'], className)} {...rest}>
      <div className={styles['form-content']}>
        <h2>Neues Konto anlegen</h2>
        <form onSubmit={onSubmit}>
          <Input type='text' placeholder='Benutzername' error={username?.message} {...register('username', usernameOpt)} />
          <Input type='email' placeholder='Email' error={email?.message} {...register('email', emailOpt)} />
          <Input type='password' error={password?.message} placeholder='Passwort' {...register('password', passwordOpt)} />
          <Button type='submit'>Konto erstellen</Button>
        </form>
      </div>

      <Switcher {...{ onSwitch }}>Du hast bereits einen Account? Anmelden</Switcher>
    </div>
  );
};
