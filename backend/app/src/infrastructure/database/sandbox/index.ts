import { createPool, createConnection } from 'mysql2/promise';

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
    const conn = await pool.getConnection();
    return conn.execute(query, parameter);
  };

  const queryUser = async (query: string, credentials: { user: string; password: string; database: string }) => {
    const conn = await createConnection({
      user: credentials.user,
      password: credentials.password,
      database: credentials.database,
      multipleStatements: true,
      host: env.SANDBOX_DATABASE_HOST,
      port: env.SANDBOX_DATABASE_PORT,
    });
    return (await conn.execute(query))[0] as object;
  };

  return { queryRoot, queryUser };
};

export type Sandbox = ReturnType<typeof createSandboxConnection>;
