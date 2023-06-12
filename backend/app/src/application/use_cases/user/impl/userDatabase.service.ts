import status from 'http-status';
import { HttpException } from '@modules/clean-backend';
import { UserService } from '$application/use_cases/user/user.service';
import { OrmClient, OrmSymbol } from '$infrastructure/database';
import { resolveDi } from '$infrastructure/di';

export const UserDatabaseService: UserService = {
  create: async (payload) => {
    return resolveDi<OrmClient>(OrmSymbol)
      .user.create({ data: { ...payload } })
      .catch(() => {
        throw new HttpException('user with this email or username already exists', status.CONFLICT);
      });
  },

  findByEmailOrUsername: async (identifier) => {
    return resolveDi<OrmClient>(OrmSymbol)
      .user.findFirstOrThrow({ where: { OR: [{ email: identifier }, { username: identifier }] } })
      .catch(() => {
        throw new HttpException('user with this identifier does not exist', status.NOT_FOUND);
      });
  },

  findByToken: async (refreshToken) => {
    return resolveDi<OrmClient>(OrmSymbol)
      .user.findFirstOrThrow({ where: { tokens: { has: refreshToken } } })
      .catch(() => {
        throw new HttpException('invalid token provided', status.BAD_REQUEST);
      });
  },

  persistTokens: async (id, tokens) => {
    const db = resolveDi<OrmClient>(OrmSymbol);

    const alreadyAssigned = await db.user.findFirst({
      where: { AND: [{ tokens: { hasSome: tokens } }, { id: { not: id } }] },
    });

    if (alreadyAssigned) {
      throw new HttpException('token already assigned', status.BAD_REQUEST);
    }

    return db.user.update({ where: { id }, data: { tokens } });
  },
};
