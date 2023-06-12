import { Controller } from '@modules/clean-backend';
import { AuthService, AuthServiceSymbol } from '$application/use_cases/auth/auth.service';
import { resolveDi } from '$infrastructure/di';
import { RegisterPayload } from '$domain/dto/auth/register.dto';

export const AuthController = Controller({
  signUp: async (request, reply) => {
    const authService = resolveDi<AuthService>(AuthServiceSymbol);
    return reply.send(await authService.signUp(request.body as RegisterPayload));
  },
});
