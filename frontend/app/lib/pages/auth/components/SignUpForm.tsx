import { FC, HTMLAttributes } from 'react';

import Button from '$lib/components/Button/Button';
import Input from '$lib/components/Input/Input';
import { Switcher } from '$lib/pages/auth/components/Switcher';

import styles from './SignForm.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  onSwitch: VoidFunction;
}

export const SignUpForm: FC<Props> = ({ onSwitch, ...rest }) => {
  return (
    <div className={styles.container} {...rest}>
      <div className={styles.formWrapper}>
        <h2>Create New Account</h2>
        <form action='' onSubmit={(e) => e.preventDefault()}>
          <Input type='text' name='username' placeholder='Username' />
          <Input type='text' name='identifier' placeholder='Email' />
          <Input type='password' name='password' placeholder='Password' />
          <Button type='submit'>Create Account</Button>
        </form>
      </div>

      <Switcher {...{ onSwitch }}>Already have an account? Sign In</Switcher>
    </div>
  );
};
