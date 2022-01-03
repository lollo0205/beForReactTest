"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeProducts_mongoose_1 = require("./typeProducts.mongoose");
const typeProducts = async (fastify) => {
    fastify.get('/', async () => {
        return await typeProducts_mongoose_1.TypeProducts.find();
    });
    fastify.post('/', async ({ body }) => {
        await typeProducts_mongoose_1.TypeProducts.create(body);
        return true;
    });
};
exports.default = typeProducts;
