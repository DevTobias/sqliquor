import { CSSProperties, useRef } from 'react';

import { ComponentSwitcher } from '$lib/components/ComponentSwitcher';
import { Icon } from '$lib/components/Icon';
import { useClickAway } from '$lib/hooks/useClickAway';
import { CodeChat } from '$lib/pages/sqliqour/components/CodeChat/CodeChat';
import { EventList } from '$lib/pages/sqliqour/components/Events/components/EventList';
import { Task } from '$lib/pages/sqliqour/components/Events/components/Task';
import { useGameStore } from '$lib/pages/sqliqour/data/store/useGameStore';
import { useTaskStore } from '$lib/pages/sqliqour/data/store/useTaskStore';
import { classNames } from '$lib/utils/classNames';

import styles from './Events.module.scss';

interface CssProps extends CSSProperties {
  '--position': number;
}

export const Events = () => {
  const { activeEvents } = useGameStore((s) => ({ activeEvents: s.activeEvents }));
  const { activeEvent, closeChat, setActiveView, activeView } = useTaskStore((s) => ({
    activeEvent: s.activeEvent,
    closeChat: s.closeTaskWindow,
    setActiveView: s.setActiveView,
    activeView: s.activeView,
  }));

  const eventsRef = useRef<HTMLDivElement>(null!);
  useClickAway(eventsRef, closeChat);

  return (
    <div className={styles['event-container']} ref={eventsRef}>
      <div className={styles.header}>
        <div className={classNames(styles.switcher, activeEvent === null && styles.inactive)}>
          <Icon
            icon={activeView === 'chat' ? 'handyman' : 'forum'}
            className={styles[activeView]}
            onClick={() => setActiveView(activeView === 'chat' ? 'task' : 'chat')}
          />
        </div>
        <div className={styles.events}>
          {activeEvents.length !== 0 && (
            <div
              className={classNames(styles.bar, activeEvent === null && styles.inactive)}
              style={{ '--position': activeEvent } as CssProps}
            />
          )}
          <EventList />
        </div>
      </div>
      <ComponentSwitcher className={styles['task-window']}>
        <Task className={classNames(styles.task, activeView !== 'task' && 'disabled')} />
        <CodeChat className={classNames(styles.task, activeView !== 'chat' && 'disabled')} />
      </ComponentSwitcher>
    </div>
  );
};
