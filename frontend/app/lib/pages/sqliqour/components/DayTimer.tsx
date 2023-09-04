import { Progress } from '$lib/components/Progress';
import { useGameStore } from '$lib/pages/sqliqour/data/store/useGameStore';

import styles from './DayTimer.module.scss';

export const DayTimer = () => {
  const { currentTimer, levels, currentLevel } = useGameStore((s) => ({
    currentTimer: s.currentTimer,
    levels: s.levels,
    currentLevel: s.currentLevel,
  }));

  const duration = levels[currentLevel].day_duration;
  const remainingTime = Math.ceil(((currentTimer ?? duration) / duration) * 100);
  const unifiedRemainingTime = Math.max(0, Math.min(100, remainingTime));
  const progressColor = unifiedRemainingTime < 40 ? '#e63381' : '#85d9b3';

  return (
    <div className={styles.timer}>
      <Progress className={styles.progress} value={unifiedRemainingTime} progressColor={progressColor} />
    </div>
  );
};
