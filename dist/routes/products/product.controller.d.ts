import { FastifyRequest, FastifyReply } from 'fastify';
import { IGetProductByIdRequest, ICreateProductRequest } from './interfaces/FastifyRequest/request.interface';
import ProductService from './product.service';
export default class ProductController {
    private productServie;
    constructor(productServie?: ProductService);
    getAllProducts: (request: FastifyRequest, reply: FastifyReply) => Promise<any[]>;
    getProductById: (request: FastifyRequest<IGetProductByIdRequest>, reply: FastifyReply) => Promise<any>;
    createProduct: (request: FastifyRequest<ICreateProductRequest>, reply: FastifyReply) => Promise<any>;
}
