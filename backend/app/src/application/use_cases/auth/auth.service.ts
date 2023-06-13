import { UserService } from '$application/use_cases/user/user.service';
import { ResponseSignUpInterface, SignUpInterface, TokenInterface } from '$domain/interface/auth.interface';
import { Environment } from '$infrastructure/config';
import { User } from '$infrastructure/database';

export type AuthServiceFactory = (s: { env: Environment; userService: UserService }) => AuthService;

export interface AuthService {
  /**
   * Registers a new {@link User} in the system. If the email or
   * username already exists, a {@link HttpException} gets thrown.
   *
   * @param user  The user dto which should get persisted
   * @throws      {@link HttpException} if username or email already exists
   * @returns     The freshly created user
   */
  signUp: (payload: SignUpInterface) => Promise<ResponseSignUpInterface>;

  /**
   * Signs in the provided user. This means generating a new
   * access and refresh token. The id of the refresh token gets
   * saved to database, to be able to detect token reuse in the future.
   *
   * @param user            The user object to authenticate
   * @param refreshCookie   The refresh token originally persisted in cookies
   * @returns               The generated token pair and a reuse detection flag
   */
  signIn: (user: User, refreshCookie?: string) => Promise<TokenInterface>;

  /**
   * Returns the user in database with the provided email if the plain password
   * matches the persisted password hash. If the credentials do not match,
   * a {@link HttpException} gets thrown.
   *
   * @param email     The email of the user account
   * @param password  The password of the user account
   * @throws          {@link HttpException} if password does not match
   * @returns         The found user object if password matches
   */
  getAuthenticatedUser: (identifier: string, password: string) => Promise<User>;
}
