import { SignOptions, sign as jwtSign, decode as jwtDecode, JwtPayload } from 'jsonwebtoken';
import { Config, ConfigSymbol } from '$infrastructure/config';
import { resolveDi } from '$infrastructure/di';

export const AuthToken = {
  sign: async (data: object | string, secret: string, options: SignOptions): Promise<string> => {
    const conf = resolveDi<Config>(ConfigSymbol);
    return jwtSign(data, secret, { algorithm: 'ES256', issuer: conf.JWT_ISSUER, ...options });
  },

  decode: (token: string) => jwtDecode(token) as JwtPayload | null,
};
