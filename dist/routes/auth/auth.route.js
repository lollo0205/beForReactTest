"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = __importDefault(require("./auth.controller"));
const authController = new auth_controller_1.default();
const auth = async (fastify) => {
    fastify.get('/github/callback', async (request, reply) => {
        const token = await fastify.githubOauth2.getAccessTokenFromAuthorizationCodeFlow(request);
        console.log(token.access_token);
        reply.send({ access_token: token });
    });
    fastify.get('/google/callback', authController.authGoogleCallback(fastify));
};
exports.default = auth;
//# sourceMappingURL=auth.route.js.map