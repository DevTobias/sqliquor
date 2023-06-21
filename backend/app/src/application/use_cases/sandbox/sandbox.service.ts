import { UserService } from '$application/use_cases/user/user.service';
import { SandboxClient, User } from '$infrastructure/database';

export type SandboxServiceFactory = (s: { sandboxDb: SandboxClient; userService: UserService }) => SandboxService;

export interface SandboxService {
  /**
   * Creates a new database in the sandbox environment for the provided
   * user if it does not already exist. Also a database user gets created,
   * with only privileges on his own database.
   *
   * @param user  The user for which a sandbox should get created
   */
  createSandboxForUser: (user: User) => Promise<void>;

  /**
   * Executes a query in the users sandbox database and returns
   * it's result.
   *
   * @param user  The user for which wants to execute the query
   * @returns     The result of the query
   */
  executeQuery: (user: User, query: string) => Promise<unknown>;
}
