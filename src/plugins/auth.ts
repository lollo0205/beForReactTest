import fastifyOauth2, { FastifyOAuth2Options, OAuth2Namespace } from 'fastify-oauth2';
import fp from 'fastify-plugin';
//  import sensible, { SensibleOptions } from 'fastify-sensible'

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export default fp<FastifyOAuth2Options>(async (fastify) => {

  fastify.register(fastifyOauth2, {
    name: 'githubOauth2',
    scope: ['profile', 'offline'],
    credentials: {
      client: {
        id: 'e0c1a60562f271d1f5ad',
        secret: '8a435ea91894e1c56f50c794248a1481f18d0153',
      },
      auth: fastifyOauth2.GITHUB_CONFIGURATION
    },
    callbackUri: 'http://localhost:3002/auth/github/callback',

    startRedirectPath: '/auth/github',
  });

  fastify.register(fastifyOauth2, {
    name: 'googleOauth2',
    scope: ['profile', 'email'],
    credentials: {
      client: {
        id: '686527754072-hnrugancj0of3na9h55se6e3hgdplffu.apps.googleusercontent.com',
        secret: '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',
      },
      auth: fastifyOauth2.GOOGLE_CONFIGURATION
    },
    callbackUri: 'http://localhost:3002/auth/google/callback',

    startRedirectPath: '/auth/google',
  });
});

declare module 'fastify' {
  export interface FastifyInstance {
    githubOauth2: OAuth2Namespace;
    googleOauth2: OAuth2Namespace;
  }
}