import { AuthDatabaseService } from '$application/use_cases/auth/authDatabase.service';
import { ChatOpenAiService } from '$application/use_cases/chat/chatOpenAi.service';
import { SandboxDatabaseService } from '$application/use_cases/sandbox/sandboxDatabase.service';
import { UserDatabaseService } from '$application/use_cases/user/userDatabase.service';
import { funcDependency, registerDependencies } from '$infrastructure/di';

export const initializeApplicationLayer = () =>
  registerDependencies({
    authService: funcDependency(AuthDatabaseService),
    userService: funcDependency(UserDatabaseService),
    sandboxService: funcDependency(SandboxDatabaseService),
    chatService: funcDependency(ChatOpenAiService),
  });
