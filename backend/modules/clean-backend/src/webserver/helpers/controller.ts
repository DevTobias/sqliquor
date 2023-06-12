import { RouteHandlerMethod } from 'fastify';

export const Controller = <T extends string = string>(
  controller: Record<T, RouteHandlerMethod>
): Record<T, RouteHandlerMethod> => {
  return controller;
};
