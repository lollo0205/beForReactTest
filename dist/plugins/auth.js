"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_oauth2_1 = __importDefault(require("fastify-oauth2"));
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
exports.default = (0, fastify_plugin_1.default)(async (fastify) => {
    const providers_auth = process.env.PROVIDERS_AUTH || '';
    for (const provider of providers_auth.split(',')) {
        const providerUpperCaser = provider.toUpperCase();
        const authPath = process.env.AUTH_PATH || '';
        const callBackLabel = process.env.CALLBACK_LABEL || '';
        const HOST = process.env.HOST || '';
        const PORT = process.env.PORT || '';
        const PROTOCOL = process.env.PROTOCOL || '';
        const callbackUri = `${PROTOCOL}://${HOST}:${PORT}${authPath}/${provider}/${callBackLabel}`;
        fastify.register(fastify_oauth2_1.default, {
            name: provider,
            scope: (process.env[`${providerUpperCaser}_SCOPE`] || '').split(','),
            credentials: {
                client: {
                    id: process.env[`${providerUpperCaser}_CLIENT_ID`] || '',
                    secret: process.env[`${providerUpperCaser}_CLIENT_SECRET`] || '',
                },
                auth: fastify_oauth2_1.default.GOOGLE_CONFIGURATION
            },
            callbackUri,
            callbackUriParams: {
                provider
            },
            startRedirectPath: `${authPath}/${provider}`,
        });
    }
});
//# sourceMappingURL=auth.js.map