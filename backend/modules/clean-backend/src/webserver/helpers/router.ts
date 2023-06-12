import { FastifyPluginCallback } from 'fastify';

export interface Route {
  prefix: string;
  routes: FastifyPluginCallback;
}

export const Router = (prefix: string, routes: FastifyPluginCallback): Route => {
  return { prefix, routes };
};
