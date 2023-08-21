import { FC, HTMLAttributes } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '$lib/components/Button';
import { SignUpFormData, emailOpt, passwordOpt, usernameOpt } from '$lib/components/features/auth/SignUpForm.validators';
import { Switcher } from '$lib/components/features/auth/Switcher';
import Input from '$lib/components/Input';
import { useAuthStore } from '$lib/store/auth.store';

import styles from './AuthForm.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  onSwitch: VoidFunction;
  onSuccess: VoidFunction;
}

export const SignUpForm: FC<Props> = ({ onSwitch, onSuccess, ...rest }) => {
  const { signup } = useAuthStore((s) => ({ signup: s.signup }));
  const { register, formState, handleSubmit } = useForm<SignUpFormData>();
  const { username, email, password } = formState.errors;

  const onSubmit = handleSubmit(async (data) => {
    const signUpPromise = signup(data).then(onSuccess);

    await toast.promise(signUpPromise, {
      loading: 'Signing up user...',
      success: 'User successfully signed up.',
      error: 'User with this email or password already exists.',
    });
  });

  return (
    <div className={styles.singleFormContainer} {...rest}>
      <div className={styles.singleFormWrapper}>
        <h2>Create New Account</h2>
        <form onSubmit={onSubmit}>
          <Input type='text' placeholder='Username' error={username?.message} {...register('username', usernameOpt)} />
          <Input type='email' placeholder='Email' error={email?.message} {...register('email', emailOpt)} />
          <Input type='password' error={password?.message} placeholder='Password' {...register('password', passwordOpt)} />
          <Button type='submit'>Create Account</Button>
        </form>
      </div>

      <Switcher {...{ onSwitch }}>Already have an account? Sign In</Switcher>
    </div>
  );
};
