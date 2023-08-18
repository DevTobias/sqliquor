import { t } from 'elysia';

import { App, SetupHandler, resolve } from '$infrastructure/webserver';
import { SandboxController } from '$interface/controller/sandbox.controller';
import { AuthHooks } from '$interface/hooks/auth.hook';

export const sandboxRoutes = (setup: SetupHandler) => (app: App) => {
  const sandboxController = resolve(SandboxController);
  const authHooks = resolve(AuthHooks);

  return app.use(setup).group('/sandbox', (group) => {
    return group.post('/execute', sandboxController.execute, { body: t.String(), beforeHandle: authHooks.tokenAuth });
  });
};
