import { z } from 'zod';

const toInt = (val: string) => parseInt(val, 10);

export const configSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']),
  DOMAIN: z.string().min(1),
  HOST: z.string().min(1),
  PORT: z.string().transform((port) => parseInt(port, 10)),
  THROTTLE_MAX_REQUESTS: z.string().transform(toInt),
  THROTTLE_TIME_WINDOW: z.string().transform(toInt),
});
