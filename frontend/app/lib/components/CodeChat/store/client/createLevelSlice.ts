import { StateCreator } from 'zustand';

import { Level } from '$lib/components/CodeChat/store/server/models';

export interface LevelSliceState {
  activeLevel: Level | null;
}

export interface LevelSlice extends LevelSliceState {
  setLevel: (level: Level) => void;
}

export const createLevelSlice = (init?: Partial<LevelSliceState>): StateCreator<LevelSlice> => {
  return (set) => ({
    ...{ activeLevel: null, ...init },
    setLevel: (activeLevel) => set(() => ({ activeLevel })),
  });
};
