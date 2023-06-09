import { createStore } from 'zustand';

import { ChatSlice, ChatSliceState, createChatSlice } from '$lib/components/CodeChat/store/client/createChatSlice';
import { MessageSlice, MessageSliceState, createMessageSlice } from '$lib/components/CodeChat/store/client/createMessageSlice';
import { createProvider } from '$lib/utils/zustand';

export type CodeChatState = ChatSliceState & MessageSliceState;
type CodeChat = ChatSlice & MessageSlice;

export const createCodeChatStore = (init?: Partial<CodeChatState>) => {
  return createStore<CodeChat>()((...props) => ({
    ...createChatSlice(init)(...props),
    ...createMessageSlice(init)(...props),
  }));
};

export const {
  Context: CodeChatContext,
  Provider: CodeChatProvider,
  useStoreContext: useCodeChatStore,
} = createProvider<CodeChat>(createCodeChatStore);
