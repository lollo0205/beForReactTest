import { FastifySchema } from 'fastify/types/schema';


export default class AuthSchema {
  authCallbackSchema = (): FastifySchema => {
    return {
      querystring: {
        required: ['provider'],
        provider: { type: 'string', required: true }
      }
    };

  };


}