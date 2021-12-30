import { FastifyPluginAsync, FastifyInstance } from "fastify";
import { TypeProducts } from "./typeProducts.mongoose";

const typeProducts: FastifyPluginAsync = async (fastify: FastifyInstance, opts): Promise<void> => {
  fastify.get('/', async (request, reply) => {
    return await TypeProducts.find();
  })
  fastify.post('/', async (request, reply) => {
    const tp = [{ name: 'cpu' }, { name: 'motherboard' }, { name: 'ram' }]
    for (const obj of tp) {
      await TypeProducts.create(obj);
    }
    return true;
  })
}

export default typeProducts;
