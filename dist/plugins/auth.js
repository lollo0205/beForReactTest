"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_oauth2_1 = __importDefault(require("fastify-oauth2"));
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
exports.default = (0, fastify_plugin_1.default)(async (fastify) => {
    fastify.register(fastify_oauth2_1.default, {
        name: 'githubOauth2',
        scope: ['profile', 'offline'],
        credentials: {
            client: {
                id: 'e0c1a60562f271d1f5ad',
                secret: '8a435ea91894e1c56f50c794248a1481f18d0153',
            },
            auth: fastify_oauth2_1.default.GITHUB_CONFIGURATION
        },
        callbackUri: 'http://localhost:3002/auth/github/callback',
        startRedirectPath: '/auth/github',
    });
    fastify.register(fastify_oauth2_1.default, {
        name: 'googleOauth2',
        scope: ['profile', 'email'],
        credentials: {
            client: {
                id: '686527754072-hnrugancj0of3na9h55se6e3hgdplffu.apps.googleusercontent.com',
                secret: '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',
            },
            auth: fastify_oauth2_1.default.GOOGLE_CONFIGURATION
        },
        callbackUri: 'http://localhost:3002/auth/google/callback',
        startRedirectPath: '/auth/google',
    });
});