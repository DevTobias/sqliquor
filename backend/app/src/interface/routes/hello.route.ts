import { Router } from '$infrastructure/webserver/types';
import { HelloController } from '$interface/controller/hello.controller';

export const HelloRouter = 'helloRouter';

export type HelloRouterFactory = (s: { helloController: HelloController }) => Router;
export const helloRouterFactory: HelloRouterFactory = ({ helloController }) => ({
  prefix: '/hello',
  routes: async (app) => {
    app.get('/', helloController.hello);
  },
});
