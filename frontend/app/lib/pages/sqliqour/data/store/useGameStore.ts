import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { ChatService } from '$lib/pages/sqliqour/data/services/chat.service';
import { GameEvent, Level, SqliqourCmsService } from '$lib/pages/sqliqour/data/services/cms.service';
import { generateSimpleId, getRandomNumber, probability } from '$lib/utils/random';

type RandomEvent = { id: string; timestamp: number; event: GameEvent };

type State = {
  levels: Level[];
  loading: boolean;
  gameStarted: boolean;
  currentLevel: number;
  activeEvents: RandomEvent[];
};

type Actions = {
  loadLevels: () => Promise<void>;
  startGameLoop: () => Promise<void>;
};

const initial = { gameStarted: false, loading: true, currentLevel: 0, levels: [], activeEvents: [] };

const replaceInRandomEvent = (randomEvent: RandomEvent, key: string, value: string) => {
  return {
    ...randomEvent,
    event: {
      ...randomEvent.event,
      task: randomEvent.event.task.replaceAll(key, value),
      sample_solution: randomEvent.event.sample_solution.replaceAll(key, value),
    },
  };
};

const addRandomEvent = async (state: State & Actions): Promise<Partial<State & Actions>> => {
  const availableEvents = state.levels[state.currentLevel].events;

  let randomEvent = {
    id: generateSimpleId(),
    timestamp: Math.ceil(new Date().getTime() / 1000),
    event: availableEvents[getRandomNumber(0, availableEvents.length)].event_id,
  };

  if (randomEvent.event.task.includes('{{EMPLOYEE_NAME}}') || randomEvent.event.sample_solution.includes('{{EMPLOYEE_NAME}}')) {
    const employees = await ChatService.getAllEmployees();
    const randomEmployee = employees[getRandomNumber(0, employees.length)];
    randomEvent = replaceInRandomEvent(randomEvent, '{{EMPLOYEE_NAME}}', `${randomEmployee.firstname} ${randomEmployee.lastname}`);
  }

  if (randomEvent.event.task.includes('{{COCKTAIL_NAME}}') || randomEvent.event.sample_solution.includes('{{COCKTAIL_NAME}}')) {
    const cocktails = await ChatService.getAllCocktails();
    const randomCocktail = cocktails[getRandomNumber(0, cocktails.length)];
    randomEvent = replaceInRandomEvent(randomEvent, '{{COCKTAIL_NAME}}', randomCocktail.name);
  }

  return { activeEvents: [...state.activeEvents, randomEvent] };
};

export const useGameStore = createWithEqualityFn<State & Actions>(
  (set, get) => ({
    ...initial,
    loadLevels: async () => set({ levels: await SqliqourCmsService.loadLevels(), loading: false }),
    startGameLoop: async () => {
      if (get().gameStarted) return;
      set({ gameStarted: true });

      setInterval(async () => {
        if (get().activeEvents.length < 4 && probability(10)) {
          set(await addRandomEvent(get()));
        }
      }, 1000);
    },
  }),
  shallow
);

SqliqourCmsService.loadLevels()
  .then(async (levels) => useGameStore.setState({ levels, loading: false }))
  .catch(() => useGameStore.setState({ loading: false }));
