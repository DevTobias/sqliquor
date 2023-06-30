import { StateCreator } from 'zustand';

import { Message } from '$lib/components/CodeChat/components/ChatMessage.types';
import { generateSimpleId } from '$lib/utils/random';

export interface MessageSliceState {
  messages: Message[];
  messagesNonce: string;
}

export interface MessageSlice extends MessageSliceState {
  addMessage: (message: Message) => void;
  refreshNonce: () => void;
}

export const createMessageSlice = (init?: Partial<MessageSliceState>): StateCreator<MessageSlice> => {
  return (set) => ({
    ...{ messages: [], messagesNonce: generateSimpleId(), ...init },
    addMessage: (message) => set(({ messages }) => ({ messages: [message, ...messages] })),
    refreshNonce: () => set(() => ({ messagesNonce: generateSimpleId() })),
  });
};
