import { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify';
// import AuthService from './auth.service';

export default class AuthController {
  // constructor(private authService: AuthService = new AuthService()) { }

  // authGoogleCallback = async (request: FastifyRequest, reply: FastifyReply) => {
  //   const token = await request. request.googleOauth2.getAccessTokenFromAuthorizationCodeFlow(request);
  //   console.log(token.access_token);

  //   // if later you need to refresh the token you can use
  //   // const newToken = await this.getNewAccessTokenUsingRefreshToken(token.refresh_token)

  //   // reply.send({ access_token: token });
  //   reply.redirect(`http://localhost:3000/reactTest/secret?token=${JSON.stringify(token)}`);
  // }
  authGoogleCallback = (fastify: FastifyInstance) => async (request: FastifyRequest, reply: FastifyReply) => {
    const token = await fastify.googleOauth2.getAccessTokenFromAuthorizationCodeFlow(request);
    console.log(token.access_token);

    // if later you need to refresh the token you can use
    // const newToken = await this.getNewAccessTokenUsingRefreshToken(token.refresh_token)

    // reply.send({ access_token: token });
    reply.redirect(`http://localhost:3000/reactTest/secret?token=${JSON.stringify(token)}`);
  };
}