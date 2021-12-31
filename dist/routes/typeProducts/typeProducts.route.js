"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeProducts_mongoose_1 = require("./typeProducts.mongoose");
const typeProducts = async (fastify, opts) => {
    fastify.get('/', async (request, reply) => {
        return await typeProducts_mongoose_1.TypeProducts.find();
    });
    fastify.post('/', async ({ body }, reply) => {
        await typeProducts_mongoose_1.TypeProducts.create(body);
        return true;
    });
};
exports.default = typeProducts;
