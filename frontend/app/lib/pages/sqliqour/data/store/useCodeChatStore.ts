import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { Message } from '$lib/pages/sqliqour/components/CodeChat/components/ChatMessage.types';
import { generateSimpleId } from '$lib/utils/random';

type State = {
  open: boolean;
  messages: Message[];
  messagesNonce: string;
};

type Actions = {
  setOpen: (open: boolean) => void;
  addMessage: (message: Message) => void;
  refreshNonce: () => void;
};

export const useCodeChatStore = createWithEqualityFn<State & Actions>(
  (set) => ({
    ...{ open: false, messages: [], messagesNonce: generateSimpleId() },
    setOpen: (open) => set(() => ({ open })),
    addMessage: (message) => set(({ messages }) => ({ messages: [message, ...messages] })),
    refreshNonce: () => set(() => ({ messagesNonce: generateSimpleId() })),
  }),
  shallow
);
