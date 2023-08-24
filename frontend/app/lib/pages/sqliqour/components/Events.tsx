import { CSSProperties, useRef } from 'react';

import { useClickAway } from '$lib/hooks/useClickAway';
import { CodeChat } from '$lib/pages/sqliqour/components/CodeChat/CodeChat';
import { EventList } from '$lib/pages/sqliqour/components/EventList';
import { useCodeChatStore } from '$lib/pages/sqliqour/data/store/useCodeChatStore';
import { useGameStore } from '$lib/pages/sqliqour/data/store/useGameStore';
import { classNames } from '$lib/utils/classNames';

import styles from './Events.module.scss';

interface CssProps extends CSSProperties {
  '--position': number;
}

export const Events = () => {
  const { activeEvent, closeChat } = useCodeChatStore((s) => ({ activeEvent: s.activeEvent, closeChat: s.closeChat }));
  const { activeEvents } = useGameStore((s) => ({ activeEvents: s.activeEvents }));

  const eventsRef = useRef<HTMLDivElement>(null!);
  useClickAway(eventsRef, closeChat);

  return (
    <div className={styles['event-container']} ref={eventsRef}>
      <div className={styles['event-wrapper']}>
        <div className={styles.events}>
          <EventList />
        </div>
        {activeEvents.length !== 0 && (
          <div
            className={classNames(styles.bar, activeEvent === null && styles.inactive)}
            style={{ '--position': activeEvent } as CssProps}
          />
        )}
      </div>
      <CodeChat className={styles.chat} />
    </div>
  );
};
