import { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify';
import AuthService from './auth.service';
import { IRequestAuthCallback } from './interfaces/request/authRequest.interface';

export default class AuthController {
  constructor(private authService: AuthService = new AuthService()) { }

  authGoogleCallback = (fastify: FastifyInstance) => async (request: FastifyRequest<IRequestAuthCallback>, reply: FastifyReply) => {
    try {
      const token = await this.authService.getToken(request, fastify);
      const userInfo = await this.authService.getUserInfo((token as any).id_token, fastify, request.params.provider);
      const user = await this.authService.checkIfExistUserOrCreated(userInfo.data);
      const docsave = await this.authService.saveToken(user._id, token);
      console.log(docsave);
      // if later you need to refresh the token you can use
      // const newToken = await this.getNewAccessTokenUsingRefreshToken(token.refresh_token)

      // reply.send({ access_token: token });
      reply.redirect(`http://localhost:3000/reactTest/secret?token=${JSON.stringify(token)}`);
    } catch (error) {
      console.log(error);
    }

  };
}