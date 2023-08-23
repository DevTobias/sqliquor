import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { GameEvent, Level, SqliqourCmsService } from '$lib/pages/sqliqour/data/services/cms.service';
import { generateSimpleId, getRandomNumber, probability } from '$lib/utils/random';

type State = {
  levels: Level[];
  loading: boolean;
  gameStarted: boolean;
  currentLevel: number;
  activeEvents: { id: string; event: GameEvent; timestamp: number }[];
};

type Actions = {
  loadLevels: () => Promise<void>;
  startGameLoop: () => Promise<void>;
};

export const useGameStore = createWithEqualityFn<State & Actions>(
  (set, get) => ({
    gameStarted: false,
    loading: true,
    currentLevel: 0,
    levels: [],
    activeEvents: [],
    loadLevels: async () => set({ levels: await SqliqourCmsService.loadLevels(), loading: false }),
    startGameLoop: async () => {
      if (get().gameStarted) return;
      set({ gameStarted: true });

      setInterval(() => {
        if (get().activeEvents.length < 4 && probability(10)) {
          const availableEvents = get().levels[get().currentLevel].events;
          set({
            activeEvents: [
              ...get().activeEvents,
              {
                id: generateSimpleId(),
                timestamp: Math.ceil(new Date().getTime() / 1000),
                event: availableEvents[getRandomNumber(0, availableEvents.length)].event_id,
              },
            ],
          });
        }
      }, 1000);
    },
  }),
  shallow
);

SqliqourCmsService.loadLevels()
  .then(async (levels) => useGameStore.setState({ levels, loading: false }))
  .catch(() => useGameStore.setState({ loading: false }));
