import { HttpClient } from '$lib/utils/http';

export const executeQuery = async (client: HttpClient, query: string): Promise<{ [key: string]: string | number }[]> => {
  const res = await client.post('sandbox/execute', { body: query });
  if (res.status !== 200) throw new Error('Could not execute query');
  return (await res.json()) as { [key: string]: string | number }[];
};
