import { FastifyInstance, FastifyRequest } from 'fastify';
import { ObjectId } from 'mongoose';
import { IRequestAuthCallback } from './interfaces/request/authRequest.interface';
export default class AuthService {
    getToken: (request: FastifyRequest<IRequestAuthCallback>, fastify: FastifyInstance) => Promise<import("fastify-oauth2").OAuth2Token>;
    getUserInfo: (idToken: string, fastify: FastifyInstance, provider: "google") => Promise<import("axios").AxiosResponse<any, any>>;
    checkIfExistUserOrCreated: (userInfo: any) => Promise<import("mongoose").Document<any, any, import("../users/user.mongoose").IUser> & import("../users/user.mongoose").IUser & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    saveToken: (idUser: ObjectId, tokenInfo: any) => Promise<any>;
}
