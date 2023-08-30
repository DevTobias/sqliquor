import { AnimatedCheckmark } from '$lib/components/AnimatedCheckmark';
import { useTaskStore } from '$lib/pages/sqliqour/data/store/useTaskStore';

import styles from './TaskSuccessIndicator.module.scss';

export const TaskSuccessIndicator = () => {
  const { showSuccessAnimation } = useTaskStore((s) => ({ showSuccessAnimation: s.showSuccessAnimation }));
  if (showSuccessAnimation) return <AnimatedCheckmark className={styles.indicator} />;
  return null;
};
