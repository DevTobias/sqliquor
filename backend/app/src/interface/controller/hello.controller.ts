import { Controller } from '$lib/controller';

export const HelloController = Controller({
  hello: async (_, reply) => {
    return reply.send({ hello: 'world' });
  },
});
