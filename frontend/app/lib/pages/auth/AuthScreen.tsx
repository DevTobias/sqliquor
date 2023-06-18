'use client';

import { useState } from 'react';
import styles from './styles/auth.module.scss';

const authText = {
  sign_in: {
    title: 'Sign In',
    action: 'Sign In',
    switch: "Don't have an account? Sign Up",
    identifier: 'Username or email',
  },
  sign_up: {
    title: 'Create New Account',
    action: 'Create Account',
    switch: 'Already have an account? Sign In',
    identifier: 'Email',
  },
};

export const AuthScreen = () => {
  const [authView, setAuthView] = useState<'sign_in' | 'sign_up'>('sign_in');

  return (
    <main className={styles.container}>
      <div className={styles.glassCard}>
        <div className={styles.formContainer}>
          <h2>{authText[authView].title}</h2>
          <form
            action=''
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className={styles.input}
              style={{ display: authView === 'sign_in' ? 'none' : 'block' }}
              type='text'
              name='username'
              placeholder='Username'
            />
            <input className={styles.input} type='text' name='identifier' placeholder={authText[authView].identifier} />
            <input className={styles.input} type='password' name='password' placeholder='Password' />
            <button className={styles.btn} type='submit'>
              {authText[authView].action}
            </button>
          </form>
        </div>

        <span className={styles.switcher} onClick={() => setAuthView(authView === 'sign_in' ? 'sign_up' : 'sign_in')}>
          {authText[authView].switch}
        </span>
      </div>
    </main>
  );
};
