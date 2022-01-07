import { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify';
import AuthService from './auth.service';
import { IRequestAuthCallback } from './interfaces/request/authRequest.interface';
export default class AuthController {
    private authService;
    constructor(authService?: AuthService);
    authGoogleCallback: (fastify: FastifyInstance) => (request: FastifyRequest<IRequestAuthCallback>, reply: FastifyReply) => Promise<void>;
}
