import { FastifyPluginAsync, FastifyInstance } from 'fastify';
import { TypeProducts } from './typeProducts.mongoose';

const typeProducts: FastifyPluginAsync = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/', async () => {
    return await TypeProducts.find();
  });
  fastify.post('/', async ({ body }) => {
    await TypeProducts.create(body);
    return true;
  });
};

export default typeProducts;
