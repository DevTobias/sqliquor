import { ChatMessage, RemoteMessage } from '$lib/components/CodeChat/store/server/models';
import { HttpClient } from '$lib/utils/http';

export const executeQuery = async (client: HttpClient, query: string): Promise<RemoteMessage[]> => {
  const res = await client.post('sandbox/execute', { body: query });
  if (res.status !== 200) throw new Error('Could not execute query');
  return (await res.json()) as RemoteMessage[];
};

export const sendChatMessages = async (client: HttpClient, messages: ChatMessage[]): Promise<string> => {
  const res = await client.post('chat', { json: messages });
  if (res.status !== 200) throw new Error('Could not send chat message');
  return (await res.text()) as string;
};
