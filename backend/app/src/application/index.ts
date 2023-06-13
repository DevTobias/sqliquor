import { AuthDatabaseService } from '$application/use_cases/auth/impl/authDatabase.service';
import { UserDatabaseService } from '$application/use_cases/user/impl/userDatabase.service';
import { funcDependency, registerDependencies } from '$infrastructure/di';

export const initializeApplicationLayer = () =>
  registerDependencies({
    authService: funcDependency(AuthDatabaseService),
    userService: funcDependency(UserDatabaseService),
  });
