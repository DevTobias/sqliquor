import { Service } from '@freshgum/typedi';

import { SandboxService } from '$application/use_cases/sandbox/_sandbox.service';
import { UserService } from '$application/use_cases/user/_user.service';
import { UserDatabaseService } from '$application/use_cases/user/user.database.service';
import { User } from '$database';
import { Sandbox } from '$database/sandbox';
import { SANDBOX } from '$infrastructure/webserver';
import { HTTP, httpException } from '$infrastructure/webserver/types';

@Service([SANDBOX, UserDatabaseService])
export class SandboxDatabaseService implements SandboxService {
  constructor(
    private sandbox: Sandbox,
    private userService: UserService
  ) {}

  createUserSandbox = async ({ id, username, sandboxPassword }: User) => {
    const database = id.replaceAll('-', '');
    const tableRights =
      'ALTER,CREATE,CREATE VIEW,DELETE,DROP,INSERT,SELECT,SHOW VIEW,TRIGGER,UPDATE,ALTER ROUTINE,EXECUTE,ALTER ROUTINE,EXECUTE';

    try {
      await this.sandbox.queryRoot(`
        CREATE DATABASE IF NOT EXISTS ${database};
        CREATE USER IF NOT EXISTS '${username}'@'%' IDENTIFIED BY '${sandboxPassword}';

        GRANT USAGE ON ${database}.* TO '${username}'@'%';
        GRANT ${tableRights} ON ${database}.* TO '${username}'@'%';

        FLUSH PRIVILEGES;
      `);

      await this.userService.update({ id, sandboxCreated: true });
    } catch (e) {
      httpException('could not create sandbox database', HTTP.BAD_REQUEST);
    }
  };

  execute = async ({ id, username, sandboxPassword, messageHistory }: User, query: string) => {
    const database = id.replaceAll('-', '');

    const sanitize = (obj: object | string) => JSON.parse(JSON.stringify(obj).replace(database, 'DATABASE'));

    try {
      const result = await this.sandbox.queryUser(query, { database, user: username, password: sandboxPassword });
      this.userService.update({ id, messageHistory: [...messageHistory, query] });
      return !Array.isArray(result) ? sanitize([result]) : sanitize(result);
    } catch (e) {
      if (e instanceof Error) return [{ error: sanitize(e.message) }];
      return httpException('Could not execute query', HTTP.BAD_REQUEST);
    }
  };
}
