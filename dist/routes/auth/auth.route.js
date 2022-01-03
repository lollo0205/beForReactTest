"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth = async (fastify) => {
    fastify.get('/github/callback', async (request, reply) => {
        const token = await fastify.githubOauth2.getAccessTokenFromAuthorizationCodeFlow(request);
        console.log(token.access_token);
        reply.send({ access_token: token });
    });
    fastify.get('/google/callback', async (request, reply) => {
        const token = await fastify.githubOauth2.getAccessTokenFromAuthorizationCodeFlow(request);
        console.log(token.access_token);
        reply.send({ access_token: token });
    });
};
exports.default = auth;
