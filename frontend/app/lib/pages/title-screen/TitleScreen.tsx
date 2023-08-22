'use client';

import { ClientSuspense } from '$lib/components/ClientSuspense';
import { ProfileDropdown } from '$lib/components/features/auth/ProfileDropdown';
import { LoadingScreen } from '$lib/components/features/loading/LoadingScreen';
import { Title } from '$lib/pages/title-screen/components/Title';
import { useAuthStore } from '$lib/store/auth.store';

import styles from './TitleScreen.module.scss';

export default function TitleScreen() {
  const { loading } = useAuthStore();

  return (
    <div className={styles.container}>
      <ClientSuspense fallback={<LoadingScreen />} loading={loading}>
        <Title />
        <ProfileDropdown />
      </ClientSuspense>
    </div>
  );
}
