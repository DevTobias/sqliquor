import { SqlError } from 'mariadb';
import { SandboxServiceFactory } from '$application/use_cases/sandbox/sandbox.service';

export const SandboxDatabaseService: SandboxServiceFactory = ({ sandboxDb, userService }) => ({
  createSandboxForUser: async ({ id, username, sandboxPassword }) => {
    const database = id.replaceAll('-', '');
    const tableRights =
      'ALTER,CREATE,CREATE VIEW,DELETE,DROP,INSERT,SELECT,SHOW VIEW,TRIGGER,UPDATE,ALTER ROUTINE,EXECUTE,ALTER ROUTINE,EXECUTE';

    await Promise.all([
      sandboxDb.queryRoot(`
      CREATE DATABASE IF NOT EXISTS ${database};
      CREATE USER IF NOT EXISTS '${username}'@'%' IDENTIFIED BY '${sandboxPassword}';

      GRANT USAGE ON ${database}.* TO '${username}'@'%';
      GRANT ${tableRights} ON ${database}.* TO '${username}'@'%';

      FLUSH PRIVILEGES;
    `),

      userService.toggleSandboxCreated(id),
    ]);
  },

  executeQuery: async ({ id, username, sandboxPassword }, query) => {
    const database = id.replaceAll('-', '');

    try {
      const [result] = await Promise.all([
        sandboxDb.query({ database, query, user: username, password: sandboxPassword }),
        userService.addSandboxQueryToHistory(id, query),
      ]);

      if (!Array.isArray(result)) {
        return [result];
      }

      return JSON.parse(JSON.stringify(result).replace(database, 'DATABASE'));
    } catch (e) {
      if (e instanceof SqlError) {
        return [{ error: e.sqlMessage?.replace(database, 'DATABASE') }];
      }

      throw e;
    }
  },
});
