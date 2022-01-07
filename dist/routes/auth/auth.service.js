"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_mongoose_1 = require("../users/user.mongoose");
const auth_mongoose_1 = require("./auth.mongoose");
class AuthService {
    constructor() {
        Object.defineProperty(this, "getToken", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (request, fastify) => {
                return await fastify[request.params.provider].getAccessTokenFromAuthorizationCodeFlow(request);
            }
        });
        Object.defineProperty(this, "getUserInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (idToken, fastify, provider) => {
                return await fastify.axios[provider].get('', { params: { id_token: idToken } });
            }
        });
        Object.defineProperty(this, "checkIfExistUserOrCreated", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (userInfo) => {
                const user = await user_mongoose_1.Users.findOne({ firstName: userInfo.given_name, lastName: userInfo.family_name, email: userInfo.email }).exec();
                return user ||
                    await user_mongoose_1.Users.create({
                        firstName: userInfo.given_name,
                        lastName: userInfo.family_name,
                        email: userInfo.email
                    });
            }
        });
        Object.defineProperty(this, "saveToken", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (idUser, tokenInfo) => {
                const tokenObj = {
                    accessToken: tokenInfo.access_token,
                    idToken: tokenInfo.id_token,
                    expiresIn: tokenInfo.expires_in,
                    tokenType: tokenInfo.token_type,
                    user: idUser
                };
                return await auth_mongoose_1.Auth.create(tokenObj);
            }
        });
    }
}
exports.default = AuthService;
//# sourceMappingURL=auth.service.js.map