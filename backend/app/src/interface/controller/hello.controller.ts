import { Controller } from '$infrastructure/webserver/types';

export interface HelloController {
  hello: Controller;
}

export type HelloControllerFactory = () => HelloController;
export const helloControllerFactory: HelloControllerFactory = () => ({
  hello: async (_, reply) => {
    return reply.send({ hello: 'world' });
  },
});
