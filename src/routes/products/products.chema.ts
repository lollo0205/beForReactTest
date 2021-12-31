import { FastifySchema } from 'fastify/types/schema';

const productsSchemaInput = {
  _id: { type: 'string', nullable: true },
  type: { type: 'string' },
  image: { type: 'string' },
  price: { type: 'number' },
  name: { type: 'string' },
  qtaStock: { type: 'number' },
  __v: { type: 'number', nullable: true }
};
export const productFindIdSchema: FastifySchema = {
  params: {
    productId: { type: 'string' }
  },
};

export const getAllProduct: FastifySchema = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: productsSchemaInput
      }
    }
  }
};

export default class ProductSchema {
  productsSchemaInput = () => {
    return {
      type: 'object',
      properties: {
        'type': { type: 'string' },
        image: { type: 'string' },
        price: { type: 'number' },
        name: { type: 'string' },
        qtaStock: { type: 'number' }
      }

    };
  };
  productsSchemaOutput = () => {
    return {
      type: 'object',
      properties: {
        _id: { type: 'string', nullable: true },
        type: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            name: { type: 'string' }
          }
        },
        image: { type: 'string' },
        price: { type: 'number' },
        name: { type: 'string' },
        qtaStock: { type: 'number' },
        __v: { type: 'number', nullable: true }
      }

    };
  };

  productFindIdSchema = (): FastifySchema => {
    return {
      params: {
        productId: { type: 'string' }
      }
    };
  };
  getAllProductSchema = (): FastifySchema => {
    return {
      response: {
        200: {
          type: 'array',
          items: this.productsSchemaOutput()
        }
      }
    };
  };
  createProductSchema = (): FastifySchema => {
    return {
      body: this.productsSchemaInput(),
      response: {
        200: this.productsSchemaOutput()
      }
    };
  };


}