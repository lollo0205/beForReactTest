import { FastifyInstance, FastifyRequest } from 'fastify';
import { ObjectId } from 'mongoose';
import { Users } from '../users/user.mongoose';
import { Auth } from './auth.mongoose';
import { IRequestAuthCallback, provider } from './interfaces/request/authRequest.interface';

export default class AuthService {
  getToken = async (request: FastifyRequest<IRequestAuthCallback>, fastify: FastifyInstance) => {
    return await fastify[request.params.provider].getAccessTokenFromAuthorizationCodeFlow(request);

  };
  getUserInfo = async (idToken: string, fastify: FastifyInstance, provider: provider) => {
    return await fastify.axios[provider].get('', { params: { id_token: idToken } });
  };
  checkIfExistUserOrCreated = async (userInfo: any) => {
    const user = await Users.findOne({ firstName: userInfo.given_name, lastName: userInfo.family_name, email: userInfo.email }).exec();
    return user ||
      await Users.create({
        firstName: userInfo.given_name,
        lastName: userInfo.family_name,
        email: userInfo.email
      });
  };

  saveToken = async (idUser: ObjectId, tokenInfo: any) => {
    const tokenObj = {
      accessToken: tokenInfo.access_token,
      idToken: tokenInfo.id_token,
      expiresIn: tokenInfo.expires_in,
      tokenType: tokenInfo.token_type,
      user: idUser
    };

    return await Auth.create(tokenObj);
  };
} 