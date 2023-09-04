import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Button from '$lib/components/Button';
import { useAuthPopupStore } from '$lib/components/features/auth/store/authpopup.store';
import { LoadingSpinner } from '$lib/components/features/loading/LoadingSpinner';
import { useGameStore } from '$lib/pages/sqliqour/data/store/useGameStore';
import { useAuthStore } from '$lib/store/auth.store';

import styles from './Title.module.scss';

export const Title = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { user } = useAuthStore();
  const { setActive } = useAuthPopupStore();
  const { loadLevels } = useGameStore((s) => ({ loadLevels: s.loadLevels }));

  const handleButtonClick = async () => {
    setLoading(true);
    await loadLevels();
    if (user) return router.push('/sqliqour');
    return setActive(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>SQLiqour</h1>
        <Button fullwidth onClick={handleButtonClick} className={styles.btn}>
          {!loading && (user ? 'Spielen' : 'Einloggen')}
          {loading && (
            <span>
              <LoadingSpinner variant='light' />
            </span>
          )}
        </Button>
      </div>
      <p>
        Tauche ein in die spannende Welt von <em>SQLiqour</em>, wo du als SQL-Held deine eigene Cocktailbar verwaltest, geheimnisvolle
        Joins entschlüsselst und die mächtigen Funktionen von MariaDB meisterst! Während deiner Reise lernst du, wie du Daten schützt,
        optimierst und transformierst, um der ultimative Geschäftsführer zu werden. Bist du bereit dafür?
      </p>
    </div>
  );
};
