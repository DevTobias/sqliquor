import { z } from 'zod';

export const environmentSchema = z.object({
  // General environments
  NODE_ENV: z.enum(['development', 'test', 'production']),

  // Server config
  HOST: z.string().min(1),
  PORT: z.string().transform((val) => parseInt(val, 10)),

  // Database configuration
  DATABASE_URL: z.string().min(1),

  // Sandbox database configuration
  SANDBOX_DATABASE_HOST: z.string().min(1),
  SANDBOX_DATABASE_PORT: z.string().transform((val) => parseInt(val, 10)),
  SANDBOX_DATABASE_ROOT_USER: z.string().min(1),
  SANDBOX_DATABASE_ROOT_PASSWORD: z.string().min(1),

  OPENAI_API_KEY: z.string(),

  // Authentication token config
  JWT_ISSUER: z.string().min(1),
  JWT_AUDIENCE: z.string().min(1),
  JWT_PRIVATE_KEY: z.string().min(1),
  JWT_PUBLIC_KEY: z.string().min(1),
  JWT_EXPIRES_IN: z.string().min(1),
  JWT_REFRESH_PRIVATE_KEY: z.string().min(1),
  JWT_REFRESH_PUBLIC_KEY: z.string().min(1),
  JWT_REFRESH_EXPIRES_IN: z.string().min(1),
});

export interface Environment extends z.infer<typeof environmentSchema> {
  IS_DEV: boolean;
}

export const loadEnvironment = (): Environment => {
  const env = environmentSchema.parse(process.env);

  const helper = {
    IS_DEV: env.NODE_ENV === 'development',
  };

  return { ...env, ...helper };
};
