import { CSSProperties } from 'react';

import { Icon } from '$lib/components/Icon';
import { Progress } from '$lib/components/Progress';
import { useGameStore } from '$lib/pages/sqliqour/data/store/useGameStore';
import { useTaskStore } from '$lib/pages/sqliqour/data/store/useTaskStore';
import { classNames } from '$lib/utils/classNames';

import styles from './EventList.module.scss';

interface CssProps extends CSSProperties {
  '--position': number;
}

export const EventList = () => {
  const { activeEvents, gameState } = useGameStore((s) => ({ activeEvents: s.activeEvents, gameState: s.gameState }));
  const { closeChat, openChat, activeEvent } = useTaskStore((s) => ({
    closeChat: s.closeTaskWindow,
    openChat: s.openTaskWindow,
    activeEvent: s.activeEvent,
  }));

  const handleEventClick = (eventId: number) => {
    if (gameState !== 'running') return null;
    if (activeEvent === eventId) return closeChat();
    return openChat(eventId);
  };

  return (
    <div className={styles['event-list']}>
      {activeEvents.length !== 0 && (
        <div
          className={classNames(styles.bar, activeEvent === null && styles.inactive)}
          style={{ '--position': activeEvent } as CssProps}
        />
      )}
      {activeEvents.map(({ event, id, timestamp }, i) => {
        const remainingTime = Math.ceil((timestamp / event.time) * 100);
        const unifiedRemainingTime = Math.max(0, Math.min(100, remainingTime));
        const progressColor = unifiedRemainingTime < 40 ? '#e63381' : '#85d9b3';

        return (
          <button key={id} className={styles.card} onClick={() => handleEventClick(i)}>
            <Progress className={styles.progress} value={unifiedRemainingTime} progressColor={progressColor} />
            <Icon icon={event.icon} />
          </button>
        );
      })}
    </div>
  );
};
