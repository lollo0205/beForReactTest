import { FastifyInstance, FastifyPluginAsync } from "fastify"
import ProductController from "./product.controller";
import ProductSchema from "./products.chema";

const productController = new ProductController()
const productSchema = new ProductSchema();
const products: FastifyPluginAsync = async (fastify: FastifyInstance, opts): Promise<void> => {
  fastify.get('/', { schema: productSchema.getAllProductSchema() }, productController.getAllProducts)
  fastify.post('/', { schema: productSchema.createProductSchema() }, productController.createProduct)
  fastify.get('/:productId', { schema: productSchema.productFindIdSchema() }, productController.getProductById)
}

export default products;
