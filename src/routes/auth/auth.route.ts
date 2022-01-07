import { FastifyPluginAsync, FastifyInstance } from 'fastify';
import AuthController from './auth.controller';

const authController = new AuthController();
const auth: FastifyPluginAsync = async (fastify: FastifyInstance) => {

  fastify.get('/:provider/callback', authController.authGoogleCallback(fastify));

};
export default auth;