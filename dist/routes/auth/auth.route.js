"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = __importDefault(require("./auth.controller"));
const authController = new auth_controller_1.default();
const auth = async (fastify) => {
    fastify.get('/:provider/callback', authController.authGoogleCallback(fastify));
};
exports.default = auth;
//# sourceMappingURL=auth.route.js.map