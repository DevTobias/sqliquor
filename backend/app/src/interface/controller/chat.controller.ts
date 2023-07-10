import status from 'http-status';
import { ChatCompletionRequestMessage } from 'openai';
import { Controller, HttpException } from '$infrastructure/webserver/types';
import { ChatService } from '$application/use_cases/chat/chat.service';

export interface ChatController {
  sendMessage: Controller;
}

export type ChatControllerFactory = (s: { chatService: ChatService }) => ChatController;
export const chatControllerFactory: ChatControllerFactory = ({ chatService }) => ({
  sendMessage: async ({ user, body }, reply) => {
    if (!user) {
      throw new HttpException('user not authenticated', status.UNAUTHORIZED);
    }

    const response = await chatService.sendMessageToAiModel(body as ChatCompletionRequestMessage[], user);

    return reply.send(response);
  },
});
