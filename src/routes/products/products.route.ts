import { FastifyInstance, FastifyPluginAsync, FastifyRequest } from "fastify"
import { productFindIdSchema } from "./products.chema";
import { Product } from "./products.mongoose";
const products: FastifyPluginAsync = async (fastify: FastifyInstance, opts): Promise<void> => {
  fastify.get('/', async (request, reply) => {
    // return productService.getProducts();
    return await Product.find().populate(['type', 'type2']);
  })
  fastify.post('/', async (request, reply) => {
    return true;
  })
  fastify.get('/:productId', productFindIdSchema, async (request: FastifyRequest<{ Params: { productId: string } }>, reply) => {
    const { productId } = request.params;
    return await Product.find({ _id: productId });
  })
}

export default products;
