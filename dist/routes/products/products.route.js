"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
const products_chema_1 = require("./products.chema");
const productService = new product_service_1.default();
const products = async (fastify, opts) => {
    fastify.get('/', async (request, reply) => {
        return productService.getProducts();
    });
    fastify.get('/firstEl', async (req, res) => {
        return productService.getProducts()[0];
    });
    fastify.get('/:productId', products_chema_1.productFindIdSchema, async (request, reply) => {
        const { productId } = request.params;
        const elementSearched = productService.getProducts().find(product => product.id === productId);
        return elementSearched;
    });
};
exports.default = products;
