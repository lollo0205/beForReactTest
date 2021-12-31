import { FastifyPluginAsync, FastifyInstance } from 'fastify';
import { TypeProducts } from './typeProducts.mongoose';

const typeProducts: FastifyPluginAsync = async (fastify: FastifyInstance, opts): Promise<void> => {
  fastify.get('/', async (request, reply) => {
    return await TypeProducts.find();
  });
  fastify.post('/', async ({ body }, reply) => {
    await TypeProducts.create(body);
    return true;
  });
};

export default typeProducts;
