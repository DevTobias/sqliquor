'use client';

import { SignInForm } from '$lib/pages/auth/components/SignInForm';
import { SignUpForm } from '$lib/pages/auth/components/SignUpForm';
import { useState } from 'react';

import styles from './AuthScreen.module.scss';

export const AuthScreen = () => {
  const [activeForm, setActiveForm] = useState<'sign_up' | 'sign_in'>('sign_in');

  return (
    <main className={styles.container}>
      <div className={styles.glassContainer}>
        <div className={styles.formContainer}>
          <SignInForm aria-hidden={activeForm !== 'sign_in'} onSwitch={() => setActiveForm('sign_up')} />
          <SignUpForm aria-hidden={activeForm !== 'sign_up'} onSwitch={() => setActiveForm('sign_in')} />
        </div>
      </div>
    </main>
  );
};
