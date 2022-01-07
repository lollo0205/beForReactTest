"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_service_1 = __importDefault(require("./auth.service"));
class AuthController {
    constructor(authService = new auth_service_1.default()) {
        Object.defineProperty(this, "authService", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: authService
        });
        Object.defineProperty(this, "authGoogleCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (fastify) => async (request, reply) => {
                try {
                    const token = await this.authService.getToken(request, fastify);
                    const userInfo = await this.authService.getUserInfo(token.id_token, fastify, request.params.provider);
                    const user = await this.authService.checkIfExistUserOrCreated(userInfo.data);
                    const docsave = await this.authService.saveToken(user._id, token);
                    console.log(docsave);
                    reply.redirect(`http://localhost:3000/reactTest/secret?token=${JSON.stringify(token)}`);
                }
                catch (error) {
                    console.log(error);
                }
            }
        });
    }
}
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map