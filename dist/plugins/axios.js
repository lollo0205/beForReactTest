"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const obj = {};
const providers_auth = process.env.PROVIDERS_AUTH || '';
for (const provider of providers_auth.split(',')) {
    obj[provider] = axios_1.default.create({
        baseURL: process.env[`${provider}_AXIOS_TOKENINFO_PATH`]
    });
}
exports.default = (0, fastify_plugin_1.default)(async (fastify) => {
    fastify.decorate('axios', obj);
});
//# sourceMappingURL=axios.js.map