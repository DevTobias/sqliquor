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
};

type Actions = {
  queryUserDatabase: (client: HttpClient, query: string) => void;
  askMessage: (client: HttpClient, message: string) => void;
  closeTaskWindow: () => void;
  openTaskWindow: (i: number) => void;
  setActiveView: (view: 'task' | 'chat') => void;
};

export const useTaskStore = createWithEqualityFn<State & Actions>(
  (set) => ({
    ...{ open: false, activeEvent: null, messages: [], activeView: 'task' },
    openTaskWindow: (i) => set({ open: true, activeEvent: i }),
    closeTaskWindow: () => set({ open: false, activeEvent: null }),
    setActiveView: (activeView) => set({ activeView }),
    queryUserDatabase: async (client, query) => {
      const queryPromise = ChatService.execute(client, query);
      return set(({ messages }) => ({
        messages: [
          { type: 'query', payload: query, id: generateSimpleId() },
          { type: 'query_result', payload: queryPromise, id: generateSimpleId() },
          ...messages,
        ],
      }));
    },
    askMessage: async (client, message) => {
      return set(({ messages }) => ({
        messages: [
          { type: 'question', payload: message, id: generateSimpleId() },
          {
            type: 'question_result',
            payload: ChatService.sendMessage(client, [{ role: 'user', content: message }]),
            id: generateSimpleId(),
          },
          ...messages,
        ],
      }));
    },
  }),
  shallow
);
