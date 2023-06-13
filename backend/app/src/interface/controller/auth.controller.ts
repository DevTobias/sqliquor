import httpStatus from 'http-status';
import { AuthService } from '$application/use_cases/auth/auth.service';
import { SignUpInterface } from '$domain/interface/auth.interface';
import { Controller, CookieOptions, HttpException } from '$infrastructure/webserver/types';

const authCookieOptions: CookieOptions = {
  httpOnly: true,
  sameSite: 'strict',
  secure: true,
  maxAge: 60 * 60 * 24 * 30,
};

export interface AuthController {
  signUp: Controller;
  signIn: Controller;
}

export type AuthControllerFactory = (s: { authService: AuthService }) => AuthController;
export const authControllerFactory: AuthControllerFactory = ({ authService }) => ({
  signUp: async (request, reply) => {
    return reply.send(await authService.signUp(request.body as SignUpInterface));
  },

  signIn: async ({ user, cookies }, reply) => {
    if (!user) {
      throw new HttpException('user not authorized', httpStatus.UNAUTHORIZED);
    }

    const { accessToken, refreshToken, reuseDetected } = await authService.signIn(user, cookies.REFRESH);

    if (reuseDetected) reply.clearCookie('REFRESH', authCookieOptions);
    reply.setCookie('REFRESH', refreshToken, authCookieOptions);

    return { accessToken, refreshToken };
  },
});
