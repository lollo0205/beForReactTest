/// <reference types="node" />
import { FastifyOAuth2Options, OAuth2Namespace } from 'fastify-oauth2';
declare const _default: import("fastify").FastifyPluginAsync<FastifyOAuth2Options, import("http").Server>;
export default _default;
declare module 'fastify' {
    interface FastifyInstance {
        google: OAuth2Namespace;
    }
}
