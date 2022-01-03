import { FastifySchema } from 'fastify/types/schema';
export declare const productFindIdSchema: FastifySchema;
export declare const getAllProduct: FastifySchema;
export default class ProductSchema {
    productsSchemaInput: () => {
        type: string;
        properties: {
            type: {
                type: string;
            };
            image: {
                type: string;
            };
            price: {
                type: string;
            };
            name: {
                type: string;
            };
            qtaStock: {
                type: string;
            };
        };
    };
    productsSchemaOutput: () => {
        type: string;
        properties: {
            _id: {
                type: string;
                nullable: boolean;
            };
            type: {
                type: string;
                properties: {
                    _id: {
                        type: string;
                    };
                    name: {
                        type: string;
                    };
                };
            };
            image: {
                type: string;
            };
            price: {
                type: string;
            };
            name: {
                type: string;
            };
            qtaStock: {
                type: string;
            };
            __v: {
                type: string;
                nullable: boolean;
            };
        };
    };
    productFindIdSchema: () => FastifySchema;
    getAllProductSchema: () => FastifySchema;
    createProductSchema: () => FastifySchema;
}
