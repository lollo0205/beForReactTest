"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    constructor() {
        Object.defineProperty(this, "authGoogleCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (fastify) => async (request, reply) => {
                const token = await fastify.googleOauth2.getAccessTokenFromAuthorizationCodeFlow(request);
                console.log(token.access_token);
                reply.redirect(`http://localhost:3000/reactTest/secret?token=${JSON.stringify(token)}`);
            }
        });
    }
}
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map