import { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify';
export default class AuthController {
    authGoogleCallback: (fastify: FastifyInstance) => (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
}
