import { useGameStore } from '$lib/pages/sqliqour/data/store/useGameStore';

import styles from './CurrentDayLabel.module.scss';

export const CurrentDayLabel = () => {
  const { currentDay } = useGameStore((s) => ({ currentDay: s.currentDay }));
  return <h2 className={styles.day}>Tag {currentDay}</h2>;
};
