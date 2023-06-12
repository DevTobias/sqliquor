import { randomUUID } from 'crypto';
import status from 'http-status';
import { HttpException, removeElementIfExists } from '@modules/clean-backend';

import { PasswordHash } from '$application/security/password';
import { AuthService } from '$application/use_cases/auth/auth.service';
import { UserService, UserServiceSymbol } from '$application/use_cases/user/user.service';
import { resolveDi } from '$infrastructure/di';
import { AuthToken } from '$application/security/tokens';
import { Config, ConfigSymbol } from '$infrastructure/config';

export const AuthDatabaseService: AuthService = {
  signUp: async (payload) => {
    const userService = resolveDi<UserService>(UserServiceSymbol);
    const password = await PasswordHash.hash(payload.password);
    const created = await userService.create({ ...payload, password });
    return { email: created.email, username: created.username, id: created.id };
  },

  signIn: async (user, refreshCookie) => {
    const conf = resolveDi<Config>(ConfigSymbol);
    const userService = resolveDi<UserService>(UserServiceSymbol);

    const { id, tokens } = user;

    // Generate a unique refresh id, an access and refresh token pair
    // The refresh id is needed to improve security while not saving a token
    // to the database.
    const refreshId = randomUUID();
    const [accessToken, refreshToken] = await Promise.all([
      AuthToken.sign({ id }, conf.JWT_PRIVATE_KEY, { subject: id, expiresIn: conf.JWT_EXPIRES_IN }),
      AuthToken.sign({ id }, conf.JWT_REFRESH_PRIVATE_KEY, {
        subject: id,
        expiresIn: conf.JWT_REFRESH_EXPIRES_IN,
        jwtid: refreshId,
      }),
    ]);

    // Parse the refresh token cookie header
    const existingRefreshId = refreshCookie ? AuthToken.decode(refreshCookie)?.jti : null;

    // If the token already exists in the array, it means that the sign in protocol
    // got called while already signed in. In this case, just remove revoke the
    // old refresh token because a new one got created.
    let filteredTokens = removeElementIfExists(tokens, existingRefreshId);

    // If a refresh token exists / was provided in the sign in process, check for the
    // token in the database. If the token was not found in the database, which means
    // the token got invalidated but still provided by the client, revoke all tokens
    // of the user because a token reuse was detected.
    let reuseDetected = false;

    if (existingRefreshId && tokens.length > 0) {
      await userService.findByToken(refreshId).catch(() => {
        filteredTokens = [];
        reuseDetected = true;
      });
    }

    // Add the generated token to the token list. If a token reuse was detected, invalidate
    // all currently active tokens. If the provided refresh token was already persisted,
    // remove it from the list (invalidate it, because a new one got created).
    await userService.persistTokens(id, [...filteredTokens, refreshId]);

    // If nothing went wrong, the tokens can get returned
    return { accessToken, refreshToken, reuseDetected };
  },

  getAuthenticatedUser: async (identifier, password) => {
    const user = await resolveDi<UserService>(UserServiceSymbol)
      .findByEmailOrUsername(identifier)
      .catch(() => {
        throw new HttpException('invalid credentials', status.UNAUTHORIZED);
      });

    if (!(await PasswordHash.compare(password, user.password))) {
      throw new HttpException('invalid credentials', status.UNAUTHORIZED);
    }

    return user;
  },
};
