import fastify, { FastifyInstance, FastifyPluginCallback } from 'fastify';
import fastifyHelmet from '@fastify/helmet';
import fastifyCors from '@fastify/cors';
import { Route } from '@modules/clean-backend';

import { loadConfig } from '$infrastructure/config';
import { notFoundHandler } from '$infrastructure/webserver/handler/not_found.handler';
import { errorHandler } from '$infrastructure/webserver/handler/error.handler';
import { rateLimitPlugin } from '$infrastructure/webserver/plugins/rate_limiter';
import { envToLoggerConfig } from '$infrastructure/webserver/plugins/logger';
import { initializeORM } from '$infrastructure/database';
import { initializeDependencies } from '$infrastructure/di';

const registerPlugins = async (app: FastifyInstance, plugins: FastifyPluginCallback[]) => {
  const defaultPlugins = [rateLimitPlugin(app), app.register(fastifyCors), app.register(fastifyHelmet)];
  return Promise.all([...defaultPlugins, ...plugins.map((plugin) => app.register(plugin))]);
};

const registerRoutes = async (app: FastifyInstance, routers: Route[]) => {
  const defaultRoutes = [app.setNotFoundHandler(notFoundHandler), app.setErrorHandler(errorHandler)];
  return Promise.all([...defaultRoutes, ...routers.map(({ prefix, routes }) => app.register(routes, { prefix }))]);
};

export const App = (init: { plugins: FastifyPluginCallback[]; routes: Route[] }) => {
  const config = loadConfig();
  initializeORM();
  initializeDependencies();

  const app = fastify({ logger: envToLoggerConfig[config.NODE_ENV] });

  app.addHook('preHandler', (req, _, done) => {
    if (req.body) req.log.info({ body: req.body }, 'parsed body');
    done();
  });

  Promise.all([registerPlugins(app, init.plugins), registerRoutes(app, init.routes)]).catch((err: Error) => {
    app.log.fatal({ msg: `error while registering routes and plugins`, err });
    process.exit(1);
  });

  const listen = async () => {
    app.listen({ port: config.PORT, host: config.HOST }, (err) => {
      if (err) {
        app.log.fatal({ msg: `application startup error`, err });
        process.exit(1);
      }
    });

    return app;
  };

  return { app, config, listen };
};
