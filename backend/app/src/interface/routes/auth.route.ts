import { AuthController } from '$interface/controller/auth.controller';
import { SignInSchema, SignUpSchema } from '$domain/validation/auth.validate';
import { Hook, Router } from '$infrastructure/webserver/types';

export const AuthRouter = 'authRouter';

export type AuthRouterFactory = (s: { authController: AuthController; localAuthHook: Hook }) => Router;
export const authRouterFactory: AuthRouterFactory = ({ authController, localAuthHook }) => ({
  prefix: '/auth',
  routes: async (app) => {
    app.post('/signup', { schema: { body: SignUpSchema } }, authController.signUp);

    app.post('/signin', { schema: { body: SignInSchema }, preHandler: localAuthHook }, (req, res) => {
      res.send(req.user);
    });
  },
});
