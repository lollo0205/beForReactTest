"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProduct = exports.productFindIdSchema = void 0;
const productsSchemaInput = {
    _id: { type: 'string', nullable: true },
    type: { type: 'string' },
    image: { type: 'string' },
    price: { type: 'number' },
    name: { type: 'string' },
    qtaStock: { type: 'number' },
    __v: { type: 'number', nullable: true }
};
exports.productFindIdSchema = {
    params: {
        productId: { type: 'string' }
    },
};
exports.getAllProduct = {
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
class ProductSchema {
    constructor() {
        Object.defineProperty(this, "productsSchemaInput", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
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
            }
        });
        Object.defineProperty(this, "productsSchemaOutput", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
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
            }
        });
        Object.defineProperty(this, "productFindIdSchema", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return {
                    params: {
                        productId: { type: 'string' }
                    }
                };
            }
        });
        Object.defineProperty(this, "getAllProductSchema", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return {
                    response: {
                        200: {
                            type: 'array',
                            items: this.productsSchemaOutput()
                        }
                    }
                };
            }
        });
        Object.defineProperty(this, "createProductSchema", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return {
                    body: this.productsSchemaInput(),
                    response: {
                        200: this.productsSchemaOutput()
                    }
                };
            }
        });
    }
}
exports.default = ProductSchema;
//# sourceMappingURL=products.chema.js.map