import { readFileSync } from 'fs';

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
  ) {
    this.dbSchema = readFileSync('./src/application/use_cases/sandbox/config/schema.sql', { encoding: 'utf8' });
    this.dbData = readFileSync('./src/application/use_cases/sandbox/config/data.sql', { encoding: 'utf8' });
  }

  private dbSchema: string;

  private dbData: string;

  createUserSandbox = async ({ id, username, sandboxPassword }: User) => {
    const database = id.replaceAll('-', '');
    const tableRights = 'ALTER,CREATE,CREATE VIEW,DELETE,DROP,INSERT,SELECT,SHOW VIEW,TRIGGER,UPDATE';

    try {
      await this.sandbox.queryRoot(`
        DROP DATABASE IF EXISTS ${database};
        CREATE DATABASE IF NOT EXISTS ${database};
        CREATE USER IF NOT EXISTS '${username}'@'%' IDENTIFIED BY '${sandboxPassword}';

        USE ${database};

        ${this.dbSchema}
        ${this.dbData}

        GRANT ${tableRights} ON ${database}.delivery TO '${username}'@'%';
        GRANT ${tableRights} ON ${database}.ingredient_orders TO '${username}'@'%';
        GRANT ${tableRights} ON ${database}.cocktail TO '${username}'@'%';
        GRANT ${tableRights} ON ${database}.dining_table TO '${username}'@'%';
        GRANT ${tableRights} ON ${database}.customer TO '${username}'@'%';
        GRANT ${tableRights} ON ${database}.employee TO '${username}'@'%';
        GRANT ${tableRights} ON ${database}.order TO '${username}'@'%';
        GRANT ${tableRights} ON ${database}.customer_seating TO '${username}'@'%';
        GRANT ${tableRights} ON ${database}.rating TO '${username}'@'%';
        GRANT ${tableRights} ON ${database}.ingredient TO '${username}'@'%';
        GRANT ${tableRights} ON ${database}.delivery_details TO '${username}'@'%';
        GRANT ${tableRights} ON ${database}.market TO '${username}'@'%';
        GRANT ${tableRights} ON ${database}.recipe_step TO '${username}'@'%';
        GRANT ${tableRights} ON ${database}.cocktail_orders TO '${username}'@'%';
        GRANT ${tableRights} ON ${database}.buys_from TO '${username}'@'%';
        GRANT ${tableRights} ON ${database}.cocktail_ingredients TO '${username}'@'%';

        FLUSH PRIVILEGES;
      `);

      await this.userService.update({ id, sandboxCreated: true });
    } catch (_) {
      httpException('could not create sandbox database', HTTP.BAD_REQUEST);
    }
  };

  execute = async ({ id, username, sandboxPassword }: User, query: string) => {
    const database = id.replaceAll('-', '');

    const sanitize = (obj: object | string) => JSON.parse(JSON.stringify(obj).replace(database, 'DATABASE'));

    try {
      const result = await this.sandbox.queryUser(query, { database, user: username, password: sandboxPassword });
      // this.userService.update({ id, messageHistory: [...messageHistory, query] });
      return !Array.isArray(result) ? sanitize([result]) : sanitize(result);
    } catch (e) {
      if (e instanceof Error) return [{ error: sanitize(e.message) }];
      return httpException('Could not execute query', HTTP.BAD_REQUEST);
    }
  };
}
