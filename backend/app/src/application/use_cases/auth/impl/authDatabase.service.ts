import { PasswordHash } from '$application/security/password';
import { AuthService } from '$application/use_cases/auth/auth.service';
import { UserService, UserServiceSymbol } from '$application/use_cases/user/user.service';
import { resolveDi } from '$infrastructure/di';

export const AuthDatabaseService: AuthService = {
  signUp: async (payload) => {
    const userService = resolveDi<UserService>(UserServiceSymbol);
    const password = await PasswordHash.hash(payload.password);
    const created = await userService.createUser({ ...payload, password });
    return { email: created.email, username: created.username, id: created.id };
  },
};
