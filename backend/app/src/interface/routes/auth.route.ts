import { Router } from '@modules/clean-backend';
import { AuthController } from '$interface/controller/auth.controller';
import { SignUpSchema } from '$domain/validation/auth.validate';

export const AuthRouter = Router('/auth', async (app) => {
  app.post('/signup', { schema: { body: SignUpSchema } }, AuthController.signUp);
});
