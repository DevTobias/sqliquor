import { FC, HTMLAttributes } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '$lib/components/Button';
import { identifierOpt, passwordOpt, SignInFormData } from '$lib/components/features/auth/SignInForm.validators';
import { Switcher } from '$lib/components/features/auth/Switcher';
import Input from '$lib/components/Input';
import { useAuthStore } from '$lib/store/auth.store';

import styles from './AuthForm.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  onSwitch: VoidFunction;
  onSuccess: VoidFunction;
}

export const SignInForm: FC<Props> = ({ onSwitch, onSuccess, ...rest }) => {
  const { signin } = useAuthStore((s) => ({ signin: s.signin }));
  const { register, formState, handleSubmit } = useForm<SignInFormData>();
  const { identifier, password } = formState.errors;

  const onSubmit = handleSubmit(async (data) => {
    const signInPromise = signin(data).then(onSuccess);

    await toast.promise(signInPromise, {
      loading: 'Signing into your account...',
      success: 'Successfully authenticated.',
      error: 'Credentials were invalid.',
    });
  });

  return (
    <div className={styles.singleFormContainer} {...rest}>
      <div className={styles.singleFormWrapper}>
        <h2>Sign In</h2>
        <form onSubmit={onSubmit}>
          <Input type='text' placeholder='Username or email' error={identifier?.message} {...register('identifier', identifierOpt)} />
          <Input type='password' error={password?.message} placeholder='Password' {...register('password', passwordOpt)} />
          <Button type='submit'>Sign In</Button>
        </form>
      </div>

      <Switcher {...{ onSwitch }}>Don&apos;t have an account? Sign Up</Switcher>
    </div>
  );
};
