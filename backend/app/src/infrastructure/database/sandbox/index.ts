import { PoolConnection, createPool, createConnection, Connection } from 'mariadb';

import { Environment } from '$infrastructure/config';

export const createSandboxConnection = (env: Environment) => {
  const pool = createPool({
    host: env.SANDBOX_DATABASE_HOST,
    port: env.SANDBOX_DATABASE_PORT,
    user: env.SANDBOX_DATABASE_ROOT_USER,
    password: env.SANDBOX_DATABASE_ROOT_PASSWORD,
    connectionLimit: 5,
    multipleStatements: true,
  });

  const queryRoot = async (query: string, parameter = []) => {
    let conn: PoolConnection | undefined;
    try {
      conn = await pool.getConnection();
      return await conn.query(query, parameter);
    } finally {
      if (conn) conn.end();
    }
  };

  const queryUser = async (
    query: string,
    parameter: string,
    credentials: { user: string; password: string; database: string }
  ) => {
    let conn: Connection | undefined;

    try {
      conn = await createConnection({
        user: credentials.user,
        password: credentials.password,
        database: credentials.database,
        multipleStatements: true,
        host: env.SANDBOX_DATABASE_HOST,
        port: env.SANDBOX_DATABASE_PORT,
      });
      return await conn.query(query, parameter);
    } finally {
      if (conn) conn.end();
    }
  };

  return { queryRoot, queryUser };
};

export type Sandbox = ReturnType<typeof createSandboxConnection>;
