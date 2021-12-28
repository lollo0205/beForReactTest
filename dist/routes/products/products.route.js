"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
const productService = new product_service_1.default();
const products = async (fastify, opts) => {
    fastify.get('/', async function (request, reply) {
        console.log(productService.getProducts());
        return productService.getProducts();
    });
};
exports.default = products;
