import { useRouter } from 'next/navigation';
import { FC, HTMLAttributes } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '$lib/components/Button';
import Input from '$lib/components/Input';
import { SignUpFormData, emailOpt, passwordOpt, usernameOpt } from '$lib/pages/auth/components/SignUpForm.validators';
import { Switcher } from '$lib/pages/auth/components/Switcher';
import { signIn, signUp } from '$lib/pages/auth/data/auth.service';

import styles from './SignForm.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  onSwitch: VoidFunction;
}

export const SignUpForm: FC<Props> = ({ onSwitch, ...rest }) => {
  const router = useRouter();
  const { register, formState, handleSubmit } = useForm<SignUpFormData>();
  const { username, email, password } = formState.errors;

  const onSubmit = handleSubmit(async (data) => {
    const signUpPromise = signUp(data);

    await toast.promise(signUpPromise, {
      loading: 'Signing up user...',
      success: 'User successfully signed up.',
      error: 'User with this email or password already exists.',
    });

    signIn({ identifier: data.email, password: data.password })
      .then(() => router.push(localStorage.getItem('navigate-from') ?? '/'))
      .catch(() => {});
  });

  return (
    <div className={styles.container} {...rest}>
      <div className={styles.formWrapper}>
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
