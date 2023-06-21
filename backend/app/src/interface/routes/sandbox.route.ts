import { ExecuteSchema } from '$domain/validation/sandbox.validate';
import { Hook, Router } from '$infrastructure/webserver/types';
import { SandboxController } from '$interface/controller/sandbox.controller';

export const SandboxRouter = 'sandboxRouter';

export type SandboxRouterFactory = (s: { sandboxController: SandboxController; tokenAuthHook: Hook }) => Router;

export const sandboxRouterFactory: SandboxRouterFactory = ({ sandboxController, tokenAuthHook }) => ({
  prefix: '/sandbox',
  routes: async (app) => {
    app.post('/execute', { schema: ExecuteSchema, preHandler: tokenAuthHook }, sandboxController.execute);
    app.post('/clear-history', { preHandler: tokenAuthHook }, sandboxController.flushSandbox);
  },
});
