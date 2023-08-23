import { CSSProperties, useRef, useState } from 'react';

import { Icon } from '$lib/components/Icon';
import { Progress } from '$lib/components/Progress';
import { useClickAway } from '$lib/hooks/useClickAway';
import { useCurrentTimestamp } from '$lib/hooks/useCurrentTime';
import { CodeChat } from '$lib/pages/sqliqour/components/CodeChat/CodeChat';
import { useCodeChatStore } from '$lib/pages/sqliqour/data/store/useCodeChatStore';
import { useGameStore } from '$lib/pages/sqliqour/data/store/useGameStore';
import { classNames } from '$lib/utils/classNames';

import styles from './Events.module.scss';

interface CssProps extends CSSProperties {
  '--position': number;
}

export const Events = () => {
  const { activeEvents } = useGameStore((s) => ({ activeEvents: s.activeEvents }));
  const { setOpen } = useCodeChatStore((s) => ({ setOpen: s.setOpen }));

  const [openEvent, setOpenEvent] = useState<number | null>(null);
  const currentTimestamp = useCurrentTimestamp();

  const closeEditor = () => {
    setOpenEvent(null);
    setOpen(false);
  };

  const openEditor = (eventId: number) => {
    setOpenEvent(eventId);
    setOpen(true);
  };

  const handleEventClick = (eventId: number) => {
    if (openEvent === eventId) closeEditor();
    else openEditor(eventId);
  };

  const eventsRef = useRef<HTMLDivElement>(null!);
  useClickAway(eventsRef, closeEditor);

  return (
    <div className={styles['event-container']} ref={eventsRef}>
      <div className={styles['event-wrapper']}>
        <div className={styles.events}>
          {activeEvents.map(({ event, id, timestamp }, i) => {
            const remainingTime = Math.ceil((1 - (currentTimestamp - timestamp) / event.time) * 100);
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
        <div
          className={classNames(styles.bar, (openEvent === null || activeEvents.length === 0) && styles.inactive)}
          style={{ '--position': openEvent } as CssProps}
        />
      </div>
      <CodeChat className={styles.chat} />
    </div>
  );
};
