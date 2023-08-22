'use client';

import { FC } from 'react';

import Button from '$lib/components/Button';
import { Dropdown } from '$lib/components/Dropdown';
import { AuthForm } from '$lib/components/features/auth/AuthForm';
import { useAuthPopupStore } from '$lib/components/features/auth/store/authpopup.store';
import { Popup } from '$lib/components/Popup';
import { useAuthStore } from '$lib/store/auth.store';
import { classNames } from '$lib/utils/classNames';

import styles from './ProfileDropdown.module.scss';

export const ProfileDropdown: FC = () => {
  const { user, client, signout } = useAuthStore((s) => ({ user: s.user, client: s.client, signout: s.signout }));
  const { active, setActive } = useAuthPopupStore();

  return (
    <>
      {!user && (
        <Button className={classNames(styles.wrapper, styles.signin)} variant='glass' onClick={() => setActive(!active)}>
          Sign In
        </Button>
      )}

      {user && client && (
        <Dropdown className={styles.wrapper}>
          <span>{user?.username}</span>
          <hr className={styles.divider} />
          <Button variant='glass' className={styles.signout} onClick={signout}>
            Sign Out
          </Button>
        </Dropdown>
      )}

      <Popup visible={active} setVisible={setActive}>
        <AuthForm onSuccess={() => setActive(false)} />
      </Popup>
    </>
  );
};
