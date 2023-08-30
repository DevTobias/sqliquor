import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { Message } from '$lib/pages/sqliqour/components/CodeChat/components/ChatMessage.types';
import { ChatService } from '$lib/pages/sqliqour/data/services/chat.service';
import { HttpClient } from '$lib/services/_http';
import { generateSimpleId } from '$lib/utils/random';

type State = {
  open: boolean;
  messages: Message[];
  activeEvent: number | null;
  activeView: 'task' | 'chat';
  selectedAnswer: string | null;
  showSuccessAnimation: boolean;
};

type Actions = {
  addResponseMessage: (msg: string) => void;
  queryUserDatabase: (client: HttpClient, query: string) => void;
  askMessage: (client: HttpClient, message: string) => void;
  closeTaskWindow: () => void;
  openTaskWindow: (i: number) => void;
  setActiveView: (view: 'task' | 'chat') => void;
  selectAnswer: (answer: string) => void;
};

export const useTaskStore = createWithEqualityFn<State & Actions>(
  (set, get) => ({
    ...{ open: false, activeEvent: null, messages: [], activeView: 'task', selectedAnswer: null, showSuccessAnimation: false },
    openTaskWindow: (i) => set({ open: true, activeEvent: i }),
    closeTaskWindow: () => set({ open: false, activeEvent: null }),
    setActiveView: (activeView) => set({ activeView }),
    selectAnswer: (selectedAnswer) => {
      if (selectedAnswer === get().selectedAnswer) return set({ selectedAnswer: null });
      return set({ selectedAnswer });
    },
    addResponseMessage: (msg) =>
      set(({ messages }) => ({
        messages: [{ type: 'general_result', payload: msg, id: generateSimpleId() }, ...messages],
        activeView: 'chat',
      })),
    queryUserDatabase: async (client, query) => {
      const queryPromise = ChatService.execute(client, query);
      const queryId = generateSimpleId();
      return set(({ messages }) => ({
        messages: [
          { type: 'query_result', payload: queryPromise, id: generateSimpleId() },
          { type: 'query', payload: query, id: queryId },
          ...messages,
        ],
        selectedAnswer: queryId,
      }));
    },
    askMessage: async (client, message) => {
      return set(({ messages }) => ({
        messages: [
          {
            type: 'question_result',
            payload: ChatService.sendMessage(client, [{ role: 'user', content: message }]),
            id: generateSimpleId(),
          },
          { type: 'question', payload: message, id: generateSimpleId() },
          ...messages,
        ],
      }));
    },
  }),
  shallow
);
