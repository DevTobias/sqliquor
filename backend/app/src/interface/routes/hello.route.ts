import { Router } from '$lib/router';
import { HelloController } from '$interface/controller/hello.controller';

export const HelloRouter = Router('/hello', async (app) => {
  app.get('/', HelloController.hello);
});
