import { Icon } from '$lib/components/Icon';
import { Progress } from '$lib/components/Progress';
import { useCurrentTimestamp } from '$lib/hooks/useCurrentTime';
import { useCodeChatStore } from '$lib/pages/sqliqour/data/store/useCodeChatStore';
import { useGameStore } from '$lib/pages/sqliqour/data/store/useGameStore';

import styles from './EventList.module.scss';

export const EventList = () => {
  const currentTimestamp = useCurrentTimestamp();
  const { activeEvents } = useGameStore((s) => ({ activeEvents: s.activeEvents }));
  const { closeChat, openChat, activeEvent } = useCodeChatStore((s) => ({
    closeChat: s.closeChat,
    openChat: s.openChat,
    activeEvent: s.activeEvent,
  }));

  const handleEventClick = (eventId: number) => {
    if (activeEvent === eventId) closeChat();
    else openChat(eventId);
  };

  return activeEvents.map(({ event, id, timestamp }, i) => {
    const remainingTime = Math.ceil((1 - (currentTimestamp - timestamp) / event.time) * 100);
    const unifiedRemainingTime = Math.max(0, Math.min(100, remainingTime));
    const progressColor = unifiedRemainingTime < 40 ? '#e63381' : '#85d9b3';
    return (
      <button key={id} className={styles.card} onClick={() => handleEventClick(i)}>
        <Progress className={styles.progress} value={unifiedRemainingTime} progressColor={progressColor} />
        <Icon icon={event.icon} />
      </button>
    );
  });
};
