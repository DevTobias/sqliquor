export type RemoteMessage = { [key: string]: string | number };

export type ChatMessage = {
  role: 'function' | 'user' | 'system' | 'assistant';
  content: string;
};

export type Level = {
  id: string;
  date_created: string;
  date_updated: string | null;
  position: number;
  difficulty: 1;
  steps: Step[];
};

export type Step = {
  id: string;
  date_created: string;
  date_updated: string | null;
  level: string;
  task: string;
  expected: unknown;
  error: string;
  success: string;
};
