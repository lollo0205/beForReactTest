import { FastifyPluginAsync } from "fastify"
import ProductService from "./product.service"
const productService = new ProductService();
const products: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    console.log(productService.getProducts());
    return productService.getProducts();
  })
  // fastify.get('/service', async function (request, reply) {
  //   return exampleService.test();
  // })
}

export default products;
