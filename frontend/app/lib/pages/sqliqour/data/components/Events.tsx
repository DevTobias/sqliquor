import { useGameStore } from '$lib/pages/sqliqour/data/store/useGameStore';

import styles from './Events.module.scss';

export const Events = () => {
  const { activeEvents } = useGameStore((s) => ({ activeEvents: s.activeEvents }));

  return (
    <div className={styles['event-wrapper']}>
      {activeEvents.map(({ event, id }) => (
        <div key={id} className={styles.card}>
          {event.name}
        </div>
      ))}
    </div>
  );
};
