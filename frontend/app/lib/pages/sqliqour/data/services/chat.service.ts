import { HttpClient } from '$lib/services/_http';

export const ChatService = {
  execute: async (client: HttpClient, query: string): Promise<RemoteMessage[]> => {
    const res = await client.post('sandbox/execute', { body: query });
    if (res.status !== 200) throw new Error('Could not execute query');
    return (await res.json()) as RemoteMessage[];
  },

  sendMessage: async (client: HttpClient, messages: ChatMessage[]): Promise<ReadableStream<Uint8Array>> => {
    const res = await client.post('chat/query', { json: messages });
    if (res.status !== 200 || res.body === null) throw new Error('Could not send chat message');
    return res.body;
  },
};

export type RemoteMessage = { [key: string]: string | number };

export type ChatMessage = {
  role: 'function' | 'user' | 'system' | 'assistant';
  content: string;
};
