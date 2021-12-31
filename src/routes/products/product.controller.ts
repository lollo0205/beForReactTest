import { FastifyRequest, FastifyReply } from "fastify";
import { IGetProductByIdRequest, ICreateProductRequest } from "./interfaces/FastifyRequest/request.interface";
import ProductService from "./product.service";

export default class ProductController {
  constructor(private productServie = new ProductService()) { }

  getAllProducts = async (request: FastifyRequest, reply: FastifyReply) => {
    return this.productServie.getProducts();
  }
  getProductById = async (request: FastifyRequest<IGetProductByIdRequest>, reply: FastifyReply) => {
    return this.productServie.getProductById(request.params.productId);
  }
  createProduct = async (request: FastifyRequest<ICreateProductRequest>, reply: FastifyReply) => {
    const productInserted = await this.productServie.createProduct(request.body);
    return this.productServie.getProductById(productInserted._id);
  }
}