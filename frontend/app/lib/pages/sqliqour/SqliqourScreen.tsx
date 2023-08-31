'use client';

import { ClientSuspense } from '$lib/components/ClientSuspense';
import { ProfileDropdown } from '$lib/components/features/auth/ProfileDropdown';
import { LoadingScreen } from '$lib/components/features/loading/LoadingScreen';
import { CurrentDayLabel } from '$lib/pages/sqliqour/components/CurrentDayLabel';
import { GameLoop } from '$lib/pages/sqliqour/components/GameLoop';
import { useGameStore } from '$lib/pages/sqliqour/data/store/useGameStore';
import { useAuthStore } from '$lib/store/auth.store';

import styles from './SqliqourScreen.module.scss';

export const SQLiqourScreen = () => {
  const { loading: authLoading } = useAuthStore();
  const { loading: levelLoading } = useGameStore((s) => ({ loading: s.loading }));

  return (
    <div className={styles.container}>
      <ClientSuspense fallback={<LoadingScreen />} loading={authLoading || levelLoading}>
        <GameLoop />
        <ProfileDropdown />
        <CurrentDayLabel />
      </ClientSuspense>
    </div>
  );
};
