export type RemoteMessage = { [key: string]: string | number };

export type ChatMessage = {
  role: 'function' | 'user' | 'system' | 'assistant';
  content: string;
};
