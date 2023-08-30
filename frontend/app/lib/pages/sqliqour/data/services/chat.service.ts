import { HttpClient } from '$lib/services/_http';
import { useAuthStore } from '$lib/store/auth.store';

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

  getAllEmployees: async () => {
    const { client } = useAuthStore.getState();
    if (!client) throw new Error('Not authenticated');
    const res = await client.post('sandbox/execute', { body: 'SELECT * FROM `employee`' });
    if (res.status !== 200) throw new Error('Could not fetch all employees');
    return (await res.json()) as Employee[];
  },

  getAllCocktails: async () => {
    const { client } = useAuthStore.getState();
    if (!client) throw new Error('Not authenticated');
    const res = await client.post('sandbox/execute', { body: 'SELECT * FROM `cocktail`' });
    if (res.status !== 200) throw new Error('Could not fetch all cocktails');
    return (await res.json()) as Cocktail[];
  },
};

export type Cocktail = {
  id: number;
  name: string;
  alcoholRating: number;
};

export type Employee = {
  id: number;
  firstname: string;
  lastname: string;
  employedSince: string;
  phone: string;
  salary: number;
  occupation: string;
  workingHours: string;
};

export type RemoteMessage = { [key: string]: string | number };

export type ChatMessage = {
  role: 'function' | 'user' | 'system' | 'assistant';
  content: string;
};
