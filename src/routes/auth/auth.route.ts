import { FastifyPluginAsync, FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import AuthController from './auth.controller';

const authController = new AuthController();
const auth: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  // fastify.get('/', async () => 'gesu');
  fastify.get('/github/callback', async (request: FastifyRequest, reply: FastifyReply) => {
    const token = await fastify.githubOauth2.getAccessTokenFromAuthorizationCodeFlow(request);
    console.log(token.access_token);

    // if later you need to refresh the token you can use
    // const newToken = await this.getNewAccessTokenUsingRefreshToken(token.refresh_token)

    reply.send({ access_token: token });
  });
  fastify.get('/google/callback', authController.authGoogleCallback(fastify));

};
export default auth;