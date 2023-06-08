import { resolve } from 'path';
import { App } from '$infrastructure/webserver';
import { HelloRouter } from '$interface/routes/hello.route';
import { AuthRouter } from '$interface/routes/auth.route';

global.root = resolve(__dirname, '..');

export const app = App({ plugins: [], routes: [HelloRouter, AuthRouter] }).listen();
