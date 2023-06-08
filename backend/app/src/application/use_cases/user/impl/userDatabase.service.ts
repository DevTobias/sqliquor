import { UserService } from '$application/use_cases/user/user.service';
import { OrmClient, OrmSymbol } from '$infrastructure/database';
import { resolveDi } from '$infrastructure/di';

export const UserDatabaseService: UserService = {
  createUser: async (payload) => {
    return resolveDi<OrmClient>(OrmSymbol).user.create({ data: { ...payload } });
  },
};
