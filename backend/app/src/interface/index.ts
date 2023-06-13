import { funcDependency, registerDependencies } from '$infrastructure/di';
import { authControllerFactory } from '$interface/controller/auth.controller';
import { helloControllerFactory } from '$interface/controller/hello.controller';
import { localAuthHookFactory } from '$interface/hooks/localAuth.hook';
import { tokenAuthHookFactory } from '$interface/hooks/tokenAuth.hook';
import { authRouterFactory } from '$interface/routes/auth.route';
import { helloRouterFactory } from '$interface/routes/hello.route';

export const initializeInterfaceLayer = () =>
  registerDependencies({
    authController: funcDependency(authControllerFactory),
    helloController: funcDependency(helloControllerFactory),

    authRouter: funcDependency(authRouterFactory),
    helloRouter: funcDependency(helloRouterFactory),

    localAuthHook: funcDependency(localAuthHookFactory),
    tokenAuthHook: funcDependency(tokenAuthHookFactory),
  });
