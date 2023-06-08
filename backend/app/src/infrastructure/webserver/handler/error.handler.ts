import { HttpException } from '@modules/clean-backend';
import { FastifyInstance } from 'fastify';

type Handler = Parameters<FastifyInstance['setErrorHandler']>[0];

export const errorHandler: Handler = async (error, _, reply) => {
  if (error instanceof HttpException) {
    return reply.code(error.code).send({ error: error.message, status: error.code });
  }

  return reply.code(500).send({ error: error.message, status: 500 });
};
