import { FastifySchema } from 'fastify/types/schema';
export default class AuthSchema {
    authCallbackSchema: () => FastifySchema;
}
