import { Controller } from '@modules/clean-backend';

export const HelloController = Controller({
  hello: async (_, reply) => {
    return reply.send({ hello: 'world' });
  },
});
