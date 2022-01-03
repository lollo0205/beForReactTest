/// <reference types="node" />
import { FastifyOAuth2Options, OAuth2Namespace } from 'fastify-oauth2';
declare const _default: import("fastify").FastifyPluginAsync<FastifyOAuth2Options, import("http").Server>;
export default _default;
declare module 'fastify' {
    interface FastifyInstance {
        githubOauth2: OAuth2Namespace;
        googleOauth2: OAuth2Namespace;
    }
}
