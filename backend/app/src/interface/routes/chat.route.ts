import { messageSchema } from '$domain/chat.interface';
import { App, SetupHandler, resolve } from '$infrastructure/webserver';
import { ChatController } from '$interface/controller/chat.controller';
import { AuthHooks } from '$interface/hooks/auth.hook';

export const chatRoutes = (setup: SetupHandler) => (app: App) => {
  const chatController = resolve(ChatController);
  const authHooks = resolve(AuthHooks);

  return app.use(setup).group('/chat', (group) => {
    return group.post('/query', chatController.queryModel, { body: messageSchema, beforeHandle: authHooks.tokenAuth });
  });
};
