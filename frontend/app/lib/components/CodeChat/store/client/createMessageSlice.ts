import { StateCreator } from 'zustand';

import { Message } from '$lib/components/CodeChat/components/ChatMessage.types';

export interface MessageSliceState {
  messages: Message[];
}

export interface MessageSlice extends MessageSliceState {
  addMessage: (message: Message) => void;
}

export const createMessageSlice = (init?: Partial<MessageSliceState>): StateCreator<MessageSlice> => {
  return (set) => ({
    ...{ messages: [], ...init },
    addMessage: (message) => set(({ messages }) => ({ messages: [message, ...messages] })),
  });
};
