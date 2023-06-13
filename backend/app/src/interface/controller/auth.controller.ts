import { AuthService } from '$application/use_cases/auth/auth.service';
import { SignUpInterface } from '$domain/interface/auth.interface';
import { Controller } from '$infrastructure/webserver/types';

export interface AuthController {
  signUp: Controller;
}

export type AuthControllerFactory = (s: { authService: AuthService }) => AuthController;
export const authControllerFactory: AuthControllerFactory = ({ authService }) => ({
  signUp: async (request, reply) => {
    return reply.send(await authService.signUp(request.body as SignUpInterface));
  },
});
