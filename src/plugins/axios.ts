import axios, { AxiosInstance } from 'axios';
import fp from 'fastify-plugin';
const obj: any = {};

const providers_auth = process.env.PROVIDERS_AUTH || '';
for (const provider of providers_auth.split(',')) {
  obj[provider] = axios.create({
    baseURL: process.env[`${provider}_AXIOS_TOKENINFO_PATH`]
  });
}
export default fp(async (fastify) => {
  fastify.decorate('axios', obj);
});

declare module 'fastify' {
  export interface FastifyInstance {
    axios: {
      google: AxiosInstance
    };
  }
}