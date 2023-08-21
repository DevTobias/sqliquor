import { StateCreator } from 'zustand';

export interface ChatSliceState {
  loading: boolean;
  open: boolean;
}

export interface ChatSlice extends ChatSliceState {
  setLoading: (loading: boolean) => void;
  setOpen: (open: boolean) => void;
}

export const createChatSlice = (init?: Partial<ChatSliceState>): StateCreator<ChatSlice> => {
  return (set) => ({
    ...{ loading: false, open: false, ...init },
    setLoading: (loading) => set(() => ({ loading })),
    setOpen: (open) => set(() => ({ open })),
  });
};
