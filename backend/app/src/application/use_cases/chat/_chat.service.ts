import { MessageInterface } from '$domain/chat.interface';
import { User } from '$infrastructure/database';

export interface ChatService {
  queryModel: (messages: MessageInterface[], user: User) => Promise<ReadableStream>;
}
