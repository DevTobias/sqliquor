'use client';

import { FC, useState } from 'react';

import { SignInForm } from '$lib/components/features/auth/SignInForm';
import { SignUpForm } from '$lib/components/features/auth/SignUpForm';

import styles from './AuthForm.module.scss';

interface Props {
  onSuccess: VoidFunction;
}

export const AuthForm: FC<Props> = ({ onSuccess }) => {
  const [activeForm, setActiveForm] = useState<'sign_up' | 'sign_in'>('sign_in');

  return (
    <>
      <div className={styles.doubleFormWrapper}>
        <div className={styles.doubleFormContainer}>
          <SignInForm aria-hidden={activeForm !== 'sign_in'} onSwitch={() => setActiveForm('sign_up')} onSuccess={onSuccess} />
          <SignUpForm aria-hidden={activeForm !== 'sign_up'} onSwitch={() => setActiveForm('sign_in')} onSuccess={onSuccess} />
        </div>
      </div>
    </>
  );
};
