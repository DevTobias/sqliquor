import { Level } from '$lib/components/CodeChat/store/server/models';
import { cmsClient } from '$lib/utils/http';

export const fetchLevelData = async (level: number): Promise<Level> => {
  const res = await cmsClient.get(`items/levels?fields=*,steps.*&filter[position][_eq]=${level}`);
  if (res.status !== 200) throw new Error('Could not fetch level data');
  return ((await res.json()) as any).data[0] as Level;
};
