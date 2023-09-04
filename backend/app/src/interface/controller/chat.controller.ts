import { Service } from '@freshgum/typedi';

import { ChatService } from '$application/use_cases/chat/_chat.service';
import { ChatOpenAiService } from '$application/use_cases/chat/chat.openai.service';
import { MessageInterface } from '$domain/chat.interface';
import { Handler } from '$infrastructure/webserver';

@Service([ChatOpenAiService])
export class ChatController {
  constructor(private chatService: ChatService) {}

  queryModel: Handler<MessageInterface[]> = async ({ user, body }) => {
    const stream = await this.chatService.queryModel(body, user!);
    return new Response(stream, {
      status: 200,
      headers: { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' },
    });
  };
}
