import { SendMessageSchema } from '$domain/validation/chat.validate';
import { Hook, Router } from '$infrastructure/webserver/types';
import { ChatController } from '$interface/controller/chat.controller';

export const ChatRouter = 'chatRouter';

export type ChatRouterFactory = (s: { chatController: ChatController; tokenAuthHook: Hook }) => Router;

export const chatRouterFactory: ChatRouterFactory = ({ chatController, tokenAuthHook }) => ({
  prefix: '/chat',
  routes: async (app) => {
    app.post('/', { schema: SendMessageSchema, preHandler: tokenAuthHook }, chatController.sendMessage);
  },
});
