import { funcDependency, registerDependencies } from '$infrastructure/di';
import { authControllerFactory } from '$interface/controller/auth.controller';
import { chatControllerFactory } from '$interface/controller/chat.controller';
import { sandboxControllerFactory } from '$interface/controller/sandbox.controller';
import { userControllerFactory } from '$interface/controller/user.controller';
import { localAuthHookFactory } from '$interface/hooks/localAuth.hook';
import { refreshTokenAuthHookFactory } from '$interface/hooks/refreshTokenAuth.hook';
import { tokenAuthHookFactory } from '$interface/hooks/tokenAuth.hook';
import { authRouterFactory } from '$interface/routes/auth.route';
import { chatRouterFactory } from '$interface/routes/chat.route';
import { sandboxRouterFactory } from '$interface/routes/sandbox.route';
import { userRouterFactory } from '$interface/routes/user.route';

export const initializeInterfaceLayer = () =>
  registerDependencies({
    authController: funcDependency(authControllerFactory),
    userController: funcDependency(userControllerFactory),
    sandboxController: funcDependency(sandboxControllerFactory),
    chatController: funcDependency(chatControllerFactory),

    authRouter: funcDependency(authRouterFactory),
    userRouter: funcDependency(userRouterFactory),
    sandboxRouter: funcDependency(sandboxRouterFactory),
    chatRouter: funcDependency(chatRouterFactory),

    localAuthHook: funcDependency(localAuthHookFactory),
    tokenAuthHook: funcDependency(tokenAuthHookFactory),
    refreshTokenAuthHook: funcDependency(refreshTokenAuthHookFactory),
  });
