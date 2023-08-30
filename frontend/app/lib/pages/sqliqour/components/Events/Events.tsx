import { useRef } from 'react';

import { ComponentSwitcher } from '$lib/components/ComponentSwitcher';
import { Icon } from '$lib/components/Icon';
import { useClickAway } from '$lib/hooks/useClickAway';
import { CodeChat } from '$lib/pages/sqliqour/components/CodeChat/CodeChat';
import { EventList } from '$lib/pages/sqliqour/components/Events/components/EventList';
import { TabButton } from '$lib/pages/sqliqour/components/Events/components/TabButton';
import { Task } from '$lib/pages/sqliqour/components/Events/components/Task';
import { useTaskStore } from '$lib/pages/sqliqour/data/store/useTaskStore';
import { classNames } from '$lib/utils/classNames';

import styles from './Events.module.scss';

export const Events = () => {
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
        <div className={styles.controls}>
          <TabButton className={styles.switcher} visible={activeEvent !== null}>
            <Icon
              icon={activeView === 'chat' ? 'handyman' : 'forum'}
              className={styles[activeView]}
              onClick={() => setActiveView(activeView === 'chat' ? 'task' : 'chat')}
            />
          </TabButton>

          <TabButton className={styles.switcher} visible={activeEvent !== null}>
            <Icon icon='fact_check' onClick={() => {}} />
          </TabButton>
        </div>

        <EventList />
      </div>

      <ComponentSwitcher className={styles['task-window']}>
        <CodeChat className={classNames(styles.task, activeView !== 'chat' && 'disabled')} />
        <Task className={classNames(styles.task, activeView !== 'task' && 'disabled')} />
      </ComponentSwitcher>
    </div>
  );
};
