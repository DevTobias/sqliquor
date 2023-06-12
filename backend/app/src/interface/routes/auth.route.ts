import { Router } from '@modules/clean-backend';
import { AuthController } from '$interface/controller/auth.controller';
import { SignInSchema, SignUpSchema } from '$domain/validation/auth.validate';
import { localAuthenticationHook } from '$interface/hooks/auth.hook';

export const AuthRouter = Router('/auth', async (app) => {
  app.post('/signup', { schema: { body: SignUpSchema } }, AuthController.signUp);

  app.post('/signin', { schema: { body: SignInSchema }, preHandler: localAuthenticationHook }, (req, res) => {
    res.send(req.user);
  });
});
