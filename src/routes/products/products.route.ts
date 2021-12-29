import { FastifyInstance, FastifyPluginAsync, FastifyRequest } from "fastify"
import ProductService from "./product.service"
import { productFindIdSchema } from "./products.chema";
const productService = new ProductService();
const products: FastifyPluginAsync = async (fastify: FastifyInstance, opts): Promise<void> => {
  fastify.get('/', async (request, reply) => {
    return productService.getProducts();
  })
  fastify.get('/firstEl', async (req, res) => {
    return productService.getProducts()[0];
  })
  fastify.get('/:productId', productFindIdSchema, async (request: FastifyRequest<{ Params: { productId: number } }>, reply) => {
    const { productId } = request.params;
    const elementSearched = productService.getProducts().find(product => product.id === productId)
    return elementSearched;
  })
}

export default products;
