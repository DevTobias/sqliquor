import { User } from '$database';

export interface SandboxService {
  /**
   * Creates a new database in the sandbox environment for the provided
   * user if it does not already exist. Also this database gets created,
   * with privileges only for the provided user and nothing else. This means
   * no other user can connect with it, nor can this user connect with anything
   * else than this database.
   *
   * @param user  The user for which a sandbox should get created
   */
  createUserSandbox: (user: User) => Promise<void>;

  /**
   * Executes a query in the users sandbox database and returns
   * it's result.
   *
   * @param user  The user for which wants to execute the query
   * @returns     The result of the query
   */
  execute: (user: User, query: string) => Promise<unknown>;
}
