import * as dotenv from 'dotenv';
import { z } from 'zod';
import { environmentSchema } from '$infrastructure/config/schema';
import { registerValue } from '$infrastructure/di';

export type Environment = z.infer<typeof environmentSchema>;
export const EnvironmentSymbol = 'env';

export const loadEnvironment = (path: string): Environment => {
  const parsedEnvironment = environmentSchema.parse(dotenv.config({ path }).parsed);
  registerValue(EnvironmentSymbol, parsedEnvironment);
  return parsedEnvironment;
};
