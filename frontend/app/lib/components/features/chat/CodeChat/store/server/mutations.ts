import { RemoteMessage } from '$lib/components/CodeChat/store/server/models';
import { HttpClient } from '$lib/services/_http';

export const executeQuery = async (client: HttpClient, query: string): Promise<RemoteMessage[]> => {
  const res = await client.post('sandbox/execute', { body: query });
  if (res.status !== 200) throw new Error('Could not execute query');
  return (await res.json()) as RemoteMessage[];
};
