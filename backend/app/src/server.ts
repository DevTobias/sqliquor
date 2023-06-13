import { resolve } from 'path';
import { App } from '$infrastructure/webserver';
import { resolveDependency as load } from '$infrastructure/di';
import { HelloRouter } from '$interface/routes/hello.route';
import { AuthRouter } from '$interface/routes/auth.route';

export const app = App({
  root: resolve(__dirname, '..'),
  plugins: () => [],
  routes: () => [load(HelloRouter), load(AuthRouter)],
}).listen();
