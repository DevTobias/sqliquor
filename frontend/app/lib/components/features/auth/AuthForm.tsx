'use client';

import { FC, useState } from 'react';

import { ComponentSwitcher } from '$lib/components/ComponentSwitcher';
import { SignInForm } from '$lib/components/features/auth/SignInForm';
import { SignUpForm } from '$lib/components/features/auth/SignUpForm';
import { classNames } from '$lib/utils/classNames';

import styles from './AuthForm.module.scss';

interface Props {
  onSuccess: VoidFunction;
}

export const AuthForm: FC<Props> = ({ onSuccess }) => {
  const [activeForm, setActiveForm] = useState<'sign_up' | 'sign_in'>('sign_in');

  return (
    <ComponentSwitcher className={styles.switcher}>
      <SignInForm
        className={classNames(activeForm !== 'sign_in' && 'disabled')}
        onSwitch={() => setActiveForm('sign_up')}
        onSuccess={onSuccess}
      />
      <SignUpForm
        className={classNames(activeForm !== 'sign_up' && 'disabled')}
        onSwitch={() => setActiveForm('sign_in')}
        onSuccess={onSuccess}
      />
    </ComponentSwitcher>
  );
};
