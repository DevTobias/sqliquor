import { PoolConnection, createPool, createConnection } from 'mariadb';
import { PrismaClient } from '$prisma/client';

import { registerValue, resolveDependency } from '$infrastructure/di';
import { Environment, EnvironmentSymbol } from '$infrastructure/config';

export * from '$prisma/client';
export type OrmClient = PrismaClient;

export type SandboxClient = {
  queryRoot: (query: string, values?: never[]) => Promise<unknown>;
  query: (opt: {
    user: string;
    password: string;
    database: string;
    query: string;
    parameter?: unknown[];
  }) => Promise<unknown>;
};

export const initializeDatabase = () => {
  const client = new PrismaClient();
  registerValue('db', client);
  return client;
};

export const initializeSandboxDatabase = () => {
  const env = resolveDependency<Environment>(EnvironmentSymbol);

  const pool = createPool({
    host: env.SANDBOX_DATABASE_HOST,
    port: env.SANDBOX_DATABASE_PORT,
    user: env.SANDBOX_DATABASE_ROOT_USER,
    password: env.SANDBOX_DATABASE_ROOT_PASSWORD,
    connectionLimit: 5,
    multipleStatements: true,
  });

  const sandboxDb: SandboxClient = {
    queryRoot: async (query: string, values = []) => {
      let conn: PoolConnection | undefined;
      try {
        conn = await pool.getConnection();
        return await conn.query(query, values);
      } catch (e) {
        if (conn) conn.release();
        throw e;
      }
    },

    query: async ({ user, password, database, query, parameter = [] }) => {
      const { SANDBOX_DATABASE_HOST: host, SANDBOX_DATABASE_PORT: port } =
        resolveDependency<Environment>(EnvironmentSymbol);

      const conn = await createConnection({ host, port, user, password, database, multipleStatements: true });

      try {
        return await conn.query(query, parameter);
      } finally {
        conn.end();
      }
    },
  };

  registerValue('sandboxDb', sandboxDb);
};
