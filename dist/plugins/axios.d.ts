/// <reference types="node" />
import { AxiosInstance } from 'axios';
declare const _default: import("fastify").FastifyPluginAsync<unknown, import("http").Server>;
export default _default;
declare module 'fastify' {
    interface FastifyInstance {
        axios: {
            google: AxiosInstance;
        };
    }
}
