import { registerDi } from '$infrastructure/di';
import { AuthServiceSymbol } from '$application/use_cases/auth/auth.service';
import { AuthDatabaseService } from '$application/use_cases/auth/impl/authDatabase.service';
import { UserServiceSymbol } from '$application/use_cases/user/user.service';
import { UserDatabaseService } from '$application/use_cases/user/impl/userDatabase.service';

export const initializeUseCases = () => {
  registerDi(UserServiceSymbol, UserDatabaseService);
  registerDi(AuthServiceSymbol, AuthDatabaseService);
};
