import { join } from 'path';
import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload';
import { FastifyPluginAsync } from 'fastify';
import { connect } from 'mongoose';
export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts
): Promise<void> => {
  // Place here your custom code!
  const db = await connect(process.env.MONGODB_URL_CONNECTION || '');
  // Do not touch the following lines
  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: opts
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    indexPattern: new RegExp('.route.js'),
    ignorePattern: /.*.js/,
    options: {
      indexPattern: new RegExp('.route.js'),

    }
  });
  process.on('exit', async () => {
    fastify.log.info('About to exit');
    await db.disconnect();
    fastify.log.info('disconnect to mongoose');
    process.exit();
  });
};

export default app;
export { app };
