import { FC, HTMLAttributes } from 'react';

import Button from '$lib/components/Button/Button';
import Input from '$lib/components/Input/Input';
import { Switcher } from '$lib/pages/auth/components/Switcher';

import styles from './SignForm.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  onSwitch: VoidFunction;
}

export const SignInForm: FC<Props> = ({ onSwitch, ...rest }) => {
  return (
    <div className={styles.container} {...rest}>
      <div className={styles.formWrapper}>
        <h2>Sign In</h2>
        <form action='' onSubmit={(e) => e.preventDefault()}>
          <Input type='text' name='identifier' placeholder='Username or email' />
          <Input type='password' name='password' placeholder='Password' />
          <Button type='submit'>Sign In</Button>
        </form>
      </div>

      <Switcher {...{ onSwitch }}>Don&apos;t have an account? Sign Up</Switcher>
    </div>
  );
};
