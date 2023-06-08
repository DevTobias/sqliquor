import { FastifyPluginCallback } from 'fastify';

export const Router = (
  prefix: string,
  routes: FastifyPluginCallback
): {
  prefix: string;
  routes: FastifyPluginCallback;
} => {
  return { prefix, routes };
};
