import { ChatCompletionRequestMessage } from 'openai';
import { Environment } from '$infrastructure/config';
import { User } from '$infrastructure/database';

export type ChatServiceFactory = (s: { env: Environment }) => ChatService;

export interface ChatService {
  sendMessageToAiModel: (messages: Array<ChatCompletionRequestMessage>, user: User) => Promise<string>;
}
