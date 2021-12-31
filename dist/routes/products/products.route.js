"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_controller_1 = require("./product.controller");
const products_chema_1 = require("./products.chema");
const productController = new product_controller_1.default();
const productSchema = new products_chema_1.default();
const products = async (fastify, opts) => {
    fastify.get('/', { schema: productSchema.getAllProductSchema() }, productController.getAllProducts);
    fastify.post('/', { schema: productSchema.createProductSchema() }, productController.createProduct);
};
exports.default = products;
