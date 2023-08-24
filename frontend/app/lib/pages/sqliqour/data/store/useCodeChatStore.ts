import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { Message } from '$lib/pages/sqliqour/components/CodeChat/components/ChatMessage.types';
import { generateSimpleId } from '$lib/utils/random';

type State = {
  open: boolean;
  messages: Message[];
  messagesNonce: string;
  activeEvent: number | null;
};

type Actions = {
  setOpen: (open: boolean) => void;
  addMessage: (message: Message) => void;
  refreshNonce: () => void;
  setActiveEvent: (val: number | null) => void;
  closeChat: () => void;
  openChat: (i: number) => void;
};

export const useCodeChatStore = createWithEqualityFn<State & Actions>(
  (set) => ({
    ...{ open: false, activeEvent: null, messages: [], messagesNonce: generateSimpleId() },
    setOpen: (open) => set(() => ({ open })),
    setActiveEvent: (activeEvent) => set(() => ({ activeEvent })),
    addMessage: (message) => set(({ messages }) => ({ messages: [message, ...messages] })),
    refreshNonce: () => set(() => ({ messagesNonce: generateSimpleId() })),
    openChat: (i) => set({ open: true, activeEvent: i }),
    closeChat: () => set({ open: false, activeEvent: null }),
  }),
  shallow
);
