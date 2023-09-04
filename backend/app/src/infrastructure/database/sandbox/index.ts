import { createConnection } from 'mysql2/promise';

import { Environment } from '$infrastructure/config';

export const createSandboxConnection = (env: Environment) => {
  const queryRoot = async (query: string) => {
    const conn = await createConnection({
      host: env.SANDBOX_DATABASE_HOST,
      port: env.SANDBOX_DATABASE_PORT,
      user: env.SANDBOX_DATABASE_ROOT_USER,
      password: env.SANDBOX_DATABASE_ROOT_PASSWORD,
      multipleStatements: true,
    });
    const res = conn.query(query);
    conn.end();
    return res;
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
    const res = (await conn.execute(query))[0] as object;
    conn.end();
    return res;
  };

  return { queryRoot, queryUser };
};

export type Sandbox = ReturnType<typeof createSandboxConnection>;
