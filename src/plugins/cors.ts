import fp from 'fastify-plugin';
//  import sensible, { SensibleOptions } from 'fastify-sensible'
import cors, { FastifyCorsOptions } from 'fastify-cors';

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export default fp<FastifyCorsOptions>(async (fastify, opts) => {
  fastify.register(cors, {
    origin: '*',
  });
});
