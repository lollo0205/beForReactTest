"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_chema_1 = require("./products.chema");
const products_mongoose_1 = require("./products.mongoose");
const products = async (fastify, opts) => {
    fastify.get('/', async (request, reply) => {
        return await products_mongoose_1.Product.find().populate(['type']);
    });
    fastify.post('/', async (request, reply) => {
        return true;
    });
    fastify.get('/:productId', products_chema_1.productFindIdSchema, async (request, reply) => {
        const { productId } = request.params;
        return await products_mongoose_1.Product.find({ _id: productId }).populate(['type']);
    });
};
exports.default = products;
