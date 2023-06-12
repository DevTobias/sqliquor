import { FastifyRequest } from 'fastify';
import { Hook } from '@modules/clean-backend';
import { AuthService, AuthServiceSymbol } from '$application/use_cases/auth/auth.service';
import { resolveDi } from '$infrastructure/di';
import { SignInPayload } from '$domain/dto/auth/signIn.dto';
import { User } from '$infrastructure/database';

declare module 'fastify' {
  interface FastifyRequest {
    user: User | null;
  }
}

export const localAuthenticationHook = Hook<FastifyRequest<{ Body: SignInPayload }>>(async (req) => {
  const authService = resolveDi<AuthService>(AuthServiceSymbol);
  req.user = await authService.getAuthenticatedUser(req.body.identifier, req.body.password);
});
