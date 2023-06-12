import { FastifyReply, FastifyRequest } from 'fastify';

export const Hook = <REQ extends FastifyRequest = FastifyRequest, REP extends FastifyReply = FastifyReply>(
  hookCallback: (req: REQ, reply: REP) => Promise<void>
) => {
  return hookCallback;
};
