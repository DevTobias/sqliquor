import { FC, PropsWithChildren, createContext, useContext, useRef } from 'react';
import { createStore, useStore } from 'zustand';

import { ChatMessage } from '$lib/components/CodeChat/models/chat.models';

interface CodeChatProps {
  messages: ChatMessage[];
  loading: boolean;
  unfolded: boolean;
}

interface CodeChatState extends CodeChatProps {
  addMessage: (message: ChatMessage) => void;
  setLoading: (loading: boolean) => void;
  setUnfolded: (unfolded: boolean) => void;
}

const DEFAULT_PROPS: CodeChatProps = {
  messages: [],
  loading: false,
  unfolded: false,
};

const createCodeChatStore = (initProps?: Partial<CodeChatProps>) => {
  return createStore<CodeChatState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    addMessage: (message) => set(({ messages }) => ({ messages: [message, ...messages] })),
    setLoading: (loading) => set(() => ({ loading })),
    setUnfolded: (unfolded) => set(() => ({ unfolded })),
  }));
};

type CodeChatStore = ReturnType<typeof createCodeChatStore>;

const CodeChatContext = createContext<CodeChatStore | null>(null);

type CodeChatProviderProps = PropsWithChildren<Partial<CodeChatProps>>;

export const CodeChatProvider: FC<CodeChatProviderProps> = ({ children, ...props }) => {
  const storeRef = useRef<ReturnType<typeof createCodeChatStore>>();
  if (!storeRef.current) storeRef.current = createCodeChatStore(props);
  return <CodeChatContext.Provider value={storeRef.current}>{children}</CodeChatContext.Provider>;
};

export function useCodeChatContext<T>(selector: (state: CodeChatState) => T, equalityFn?: (left: T, right: T) => boolean): T {
  const store = useContext(CodeChatContext);
  if (!store) throw new Error('Missing CodeChatContext.Provider in the tree');
  return useStore(store, selector, equalityFn);
}
