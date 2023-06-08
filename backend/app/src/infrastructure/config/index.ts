import { asValue } from 'awilix';
import * as dotenv from 'dotenv';
import { z } from 'zod';

import { di } from '$infrastructure/di';
import { configSchema } from '$infrastructure/config/schema';

export type Config = z.infer<typeof configSchema>;
export const ConfigSymbol = 'config';

export const loadConfig = (): Config => {
  dotenv.config({ path: `${global.root}/.env` });
  const parsedConfig = configSchema.parse(process.env);
  di.register({ config: asValue(parsedConfig) });
  return parsedConfig;
};
