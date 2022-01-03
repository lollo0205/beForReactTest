"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const path_1 = require("path");
const fastify_autoload_1 = __importDefault(require("fastify-autoload"));
const app = async (fastify, opts) => {
    void fastify.register(fastify_autoload_1.default, {
        dir: (0, path_1.join)(__dirname, 'plugins'),
        options: opts
    });
    console.log('dopo plug');
    void fastify.register(fastify_autoload_1.default, {
        dir: (0, path_1.join)(__dirname, 'routes'),
        indexPattern: new RegExp('.route.js'),
        ignorePattern: /.*.js/,
        options: {
            indexPattern: new RegExp('.route.js'),
        }
    });
    process.on('exit', async () => {
        fastify.log.info('About to exit');
        fastify.log.info('disconnect to mongoose');
        process.exit();
    });
};
exports.app = app;
exports.default = app;
