import fastifyOauth2, { FastifyOAuth2Options, OAuth2Namespace } from 'fastify-oauth2';
import fp from 'fastify-plugin';
//  import sensible, { SensibleOptions } from 'fastify-sensible'

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export default fp<FastifyOAuth2Options>(async (fastify) => {

  const providers_auth = process.env.PROVIDERS_AUTH || '';
  for (const provider of providers_auth.split(',')) {
    const providerUpperCaser = provider.toUpperCase();
    const authPath = process.env.AUTH_PATH || '';
    const callBackLabel = process.env.CALLBACK_LABEL || '';
    const HOST = process.env.HOST || '';
    const PORT = process.env.PORT || '';
    const PROTOCOL = process.env.PROTOCOL || '';
    const callbackUri = `${PROTOCOL}://${HOST}:${PORT}${authPath}/${provider}/${callBackLabel}`;
    fastify.register(fastifyOauth2, {
      name: provider,
      scope: (process.env[`${providerUpperCaser}_SCOPE`] || '').split(','),
      credentials: {
        client: {
          id: process.env[`${providerUpperCaser}_CLIENT_ID`] || '',
          secret: process.env[`${providerUpperCaser}_CLIENT_SECRET`] || '',
        },
        auth: fastifyOauth2.GOOGLE_CONFIGURATION
      },
      callbackUri,
      callbackUriParams: {
        provider
      },
      startRedirectPath: `${authPath}/${provider}`,
    });
  }
});

declare module 'fastify' {
  export interface FastifyInstance {
    google: OAuth2Namespace;
    // github: OAuth2Namespace;
  }
}