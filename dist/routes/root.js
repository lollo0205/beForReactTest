"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const root = async (fastify, opts) => {
    fastify.get('/', async function (request, reply) {
        console.log();
        return { root: true };
    });
};
exports.default = root;
