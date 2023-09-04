import { create } from 'zustand';

type State = {
  active: boolean;
};

type Actions = {
  setActive: (active: boolean) => void;
};

export const useAuthPopupStore = create<State & Actions>((set) => ({
  active: false,
  setActive: (active) => set({ active }),
}));
