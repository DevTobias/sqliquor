import deepEqual from 'deep-eql';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { useAuthPopupStore } from '$lib/components/features/auth/store/authpopup.store';
import { ChatService } from '$lib/pages/sqliqour/data/services/chat.service';
import { GameEvent, Level, SqliqourCmsService } from '$lib/pages/sqliqour/data/services/cms.service';
import { useTaskStore } from '$lib/pages/sqliqour/data/store/useTaskStore';
import { useAuthStore } from '$lib/store/auth.store';
import { generateSimpleId, getRandomNumber, probability } from '$lib/utils/random';

type RandomEvent = { id: string; timestamp: number; event: GameEvent };

type State = {
  levels: Level[];
  loading: boolean;
  currentLevel: number;
  activeEvents: RandomEvent[];
  gameState: 'running' | 'paused' | 'finished' | null;
};

type Actions = {
  loadLevels: () => Promise<void>;
  startGameLoop: () => Promise<void>;
  checkAnswer: () => void;
  reset: () => void;
};

const initial: State = { loading: true, currentLevel: 0, levels: [], activeEvents: [], gameState: null };

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
  const chosenEvent = availableEvents[getRandomNumber(0, availableEvents.length)].event_id;
  let randomEvent = { id: generateSimpleId(), timestamp: chosenEvent.time, event: chosenEvent };

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

let interval: NodeJS.Timeout;

export const useGameStore = createWithEqualityFn<State & Actions>(
  (set, get) => ({
    ...initial,
    reset: () => set({ ...initial, levels: get().levels, loading: false }),
    loadLevels: async () => set({ levels: await SqliqourCmsService.loadLevels(), loading: false }),
    startGameLoop: async () => {
      if (get().gameState !== null || get().loading) return;
      set({ gameState: 'running' });

      interval = setInterval(async () => {
        const { activeEvents, gameState } = get();

        if (gameState === 'running' && useAuthStore.getState().client === null) {
          set({ gameState: 'paused' });
          return useAuthPopupStore.getState().setActive(true);
        }

        if (gameState === 'paused' && useAuthStore.getState().client !== null) {
          return set({ gameState: 'running' });
        }

        if (gameState === 'paused' || gameState === 'finished') return null;

        if (activeEvents.length < 4 && probability(50)) {
          set(await addRandomEvent(get()));
        }

        set({ activeEvents: get().activeEvents.map((e) => ({ ...e, timestamp: e.timestamp - 1 })) });

        if (activeEvents.find((e) => e.timestamp <= 0)) {
          clearInterval(interval);
          set({ gameState: 'finished' });
          useTaskStore.getState().closeTaskWindow();
        }

        return null;
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
