import { SignOptions, sign as jwtSign, decode as jwtDecode, JwtPayload } from 'jsonwebtoken';
import { EnvironmentSymbol, Environment } from '$infrastructure/config';
import { resolveDependency } from '$infrastructure/di';

export const AuthToken = {
  sign: async (data: object | string, secret: string, options: SignOptions): Promise<string> => {
    const conf = resolveDependency<Environment>(EnvironmentSymbol);
    return jwtSign(data, secret, { algorithm: 'ES256', issuer: conf.JWT_ISSUER, ...options });
  },

  decode: (token: string) => jwtDecode(token) as JwtPayload | null,
};
