import { useRouter } from 'next/navigation';
import { FC, HTMLAttributes } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '$lib/components/Button';
import Input from '$lib/components/Input';
import { SignInFormData, identifierOpt, passwordOpt } from '$lib/pages/auth/components/SignInForm.validators';
import { Switcher } from '$lib/pages/auth/components/Switcher';
import { signIn } from '$lib/pages/auth/data/auth.service';

import styles from './SignForm.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  onSwitch: VoidFunction;
}

export const SignInForm: FC<Props> = ({ onSwitch, ...rest }) => {
  const router = useRouter();
  const { register, formState, handleSubmit } = useForm<SignInFormData>();
  const { identifier, password } = formState.errors;

  const onSubmit = handleSubmit(async (data) => {
    const signInPromise = signIn(data);

    await toast.promise(signInPromise, {
      loading: 'Signing into your account...',
      success: 'Successfully authenticated.',
      error: 'Credentials were invalid.',
    });

    signInPromise.then(() => router.push('/profile')).catch(() => {});
  });

  return (
    <div className={styles.container} {...rest}>
      <div className={styles.formWrapper}>
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
