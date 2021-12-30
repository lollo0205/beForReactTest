"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeProducts_mongoose_1 = require("./typeProducts.mongoose");
const typeProducts = async (fastify, opts) => {
    fastify.get('/', async (request, reply) => {
        return await typeProducts_mongoose_1.TypeProducts.find();
    });
    fastify.post('/', async (request, reply) => {
        const tp = [{ name: 'cpu' }, { name: 'motherboard' }, { name: 'ram' }];
        for (const obj of tp) {
            await typeProducts_mongoose_1.TypeProducts.create(obj);
        }
        return true;
    });
};
exports.default = typeProducts;
