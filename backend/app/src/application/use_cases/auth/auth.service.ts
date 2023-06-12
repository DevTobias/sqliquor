import { RegisterPayload, RegisterResponse } from '$domain/dto/auth/register.dto';
import { TokenPayload } from '$domain/dto/auth/signIn.dto';
import { User } from '$infrastructure/database';

export const AuthServiceSymbol = 'auth_service';
export interface AuthService {
  /**
   * Registers a new {@link User} in the system. If the email or
   * username already exists, a {@link HttpException} gets thrown.
   *
   * @param user  The user dto which should get persisted
   * @throws      {@link HttpException} if username or email already exists
   * @returns     The freshly created user
   */
  signUp: (payload: RegisterPayload) => Promise<RegisterResponse>;

  /**
   * Signs in the provided user. This means generating a new
   * access and refresh token. The id of the refresh token gets
   * saved to database, to be able to detect token reuse in the future.
   *
   * @param user            The user object to authenticate
   * @param refreshCookie   The refresh token originally persisted in cookies
   * @returns               The generated token pair and a reuse detection flag
   */
  signIn: (user: User, refreshCookie?: string) => Promise<TokenPayload>;

  getAuthenticatedUser: (identifier: string, password: string) => Promise<User>;
}
