import { FC, HTMLAttributes } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '$lib/components/Button';
import { identifierOpt, passwordOpt, SignInFormData } from '$lib/components/features/auth/SignInForm.validators';
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

export const SignInForm: FC<Props> = ({ className, onSwitch, onSuccess, ...rest }) => {
  const { signin } = useAuthStore((s) => ({ signin: s.signin }));
  const { register, formState, handleSubmit } = useForm<SignInFormData>();
  const { identifier, password } = formState.errors;

  const onSubmit = handleSubmit(async (data) => {
    const signInPromise = signin(data).then(onSuccess);

    await toast.promise(signInPromise, {
      loading: 'In das Benutzerkonto anmelden...',
      success: 'Erfolgreich angemeldet.',
      error: 'Bitte überprüfe deine Zugangsdaten',
    });
  });

  return (
    <div className={classNames(styles['form-container'], className)} {...rest}>
      <div className={styles['form-content']}>
        <h2>Anmelden</h2>
        <form onSubmit={onSubmit}>
          <Input
            type='text'
            placeholder='Nutzername oder Email'
            error={identifier?.message}
            {...register('identifier', identifierOpt)}
          />
          <Input type='password' error={password?.message} placeholder='Passwort' {...register('password', passwordOpt)} />
          <Button type='submit'>Anmelden</Button>
        </form>
      </div>

      <Switcher {...{ onSwitch }}>Noch nicht registriert? Jetzt anmelden</Switcher>
    </div>
  );
};
