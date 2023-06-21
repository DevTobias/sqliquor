import status from 'http-status';
import { Controller, HttpException } from '$infrastructure/webserver/types';
import { SandboxService } from '$application/use_cases/sandbox/sandbox.service';
import { mapUserToPublic } from '$domain/mappings/user.mapper';
import { UserService } from '$application/use_cases/user/user.service';

export interface SandboxController {
  execute: Controller;
  flushSandbox: Controller;
}

export type SandboxControllerFactory = (s: {
  sandboxService: SandboxService;
  userService: UserService;
}) => SandboxController;

export const sandboxControllerFactory: SandboxControllerFactory = ({ sandboxService, userService }) => ({
  execute: async ({ user, body }, reply) => {
    if (!user) {
      throw new HttpException('user not authenticated', status.UNAUTHORIZED);
    }

    if (!user.sandboxCreated) {
      await sandboxService.createSandboxForUser(user);
    }

    const result = await sandboxService.executeQuery(user, body as string);
    const parsedResult = JSON.stringify(result, (_, value) => (typeof value === 'bigint' ? value.toString() : value));
    return reply.header('Content-Type', 'application/json').send(parsedResult);
  },

  flushSandbox: async ({ user }, reply) => {
    if (!user) {
      throw new HttpException('user not authenticated', status.UNAUTHORIZED);
    }

    const updatedUser = await userService.flushSandboxHistory(user.id);
    return reply.send(mapUserToPublic(updatedUser));
  },
});
