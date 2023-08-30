import deepEqual from 'deep-eql';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { ChatService } from '$lib/pages/sqliqour/data/services/chat.service';
import { GameEvent, Level, SqliqourCmsService } from '$lib/pages/sqliqour/data/services/cms.service';
import { useTaskStore } from '$lib/pages/sqliqour/data/store/useTaskStore';
import { useAuthStore } from '$lib/store/auth.store';
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
  checkAnswer: () => void;
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
        if (get().activeEvents.length < 4 && probability(50)) {
          set(await addRandomEvent(get()));
        }
      }, 1000);
    },

    checkAnswer: async () => {
      const { addResponseMessage, selectedAnswer: selectedAnswerId } = useTaskStore.getState();
      const client = useAuthStore.getState().client!;
      const { activeEvents } = get();

      if (!selectedAnswerId) return addResponseMessage('Bitte wähle eine deiner Antworten aus, welche du abgeben möchtest!');

      const { event, id } = activeEvents[useTaskStore.getState().activeEvent!];
      const answer = useTaskStore.getState().messages.find((msg) => msg.id === selectedAnswerId)!.payload as string;

      let isCorrect = false;

      if (event.expected_result === null) {
        const [userResult, expectedResult] = await Promise.all([
          ChatService.execute(client, answer),
          ChatService.execute(client, event.sample_solution),
        ]);
        isCorrect = deepEqual(userResult, expectedResult);
      }

      if (event.expected_result !== null) {
        const expectedResult = await ChatService.execute(client, event.sample_solution);
        isCorrect = deepEqual(event.expected_result, expectedResult);
      }

      if (isCorrect) {
        set({ activeEvents: activeEvents.filter((e) => e.id !== id) });
        addResponseMessage(`Super! Du hast die Aufgabe richtig gelöst!`);
        useTaskStore.setState({
          selectedAnswer: null,
          activeEvent: activeEvents.length <= 1 ? null : 0,
          activeView: 'task',
          showSuccessAnimation: true,
        });
        return setTimeout(() => useTaskStore.setState({ showSuccessAnimation: false }), 3000);
      }

      return addResponseMessage(`Das war noch nicht ganz richtig! Probiere es nochmal, du warst knapp dran!`);
    },
  }),
  shallow
);

SqliqourCmsService.loadLevels()
  .then(async (levels) => useGameStore.setState({ levels, loading: false }))
  .catch(() => useGameStore.setState({ loading: false }));
