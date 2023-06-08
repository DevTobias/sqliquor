import fastifyRateLimit from '@fastify/rate-limit';
import { FastifyInstance } from 'fastify';

import { Config, ConfigSymbol } from '$infrastructure/config';
import { di } from '$infrastructure/di';

export const rateLimitPlugin = (app: FastifyInstance) => {
  const config = di.resolve<Config>(ConfigSymbol);

  const rateLimitConfig = {
    max: config.THROTTLE_MAX_REQUESTS,
    timeWindow: config.THROTTLE_TIME_WINDOW,
  };

  return app.register(fastifyRateLimit, rateLimitConfig);
};
