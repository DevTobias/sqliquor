import { resolve } from 'path';
import { App } from '$infrastructure/webserver';
import { HelloRouter } from '$interface/routes/hello.route';

global.root = resolve(__dirname, '..');

export const app = App({ plugins: [], routes: [HelloRouter] }).listen();
