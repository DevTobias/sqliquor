import { cmsClient } from '$lib/services/_http';

export const SqliqourCmsService = {
  loadLevels: async (): Promise<Level[]> => {
    const res = await cmsClient.get('items/level', { searchParams: { fields: '*,events.event_id.*' } });
    if (res.status !== 200) throw new Error(`Something went wrong fetching the level data. Is the cms up?`);
    return ((await res.json()) as { data: Level[] }).data;
  },
};

export interface Level {
  id: number;
  title: string;
  tutorial: string;
  amount_days: number;
  day_duration: number;
  position: number;
  events: { event_id: GameEvent }[];
}

export interface GameEvent {
  id: number;
  time: number;
  name: string;
  task: string;
  icon: string;
  sample_solution: string;
  expected_result: string | null;
  must_include_keywords: string[] | null;
  reward: number | null;
}
