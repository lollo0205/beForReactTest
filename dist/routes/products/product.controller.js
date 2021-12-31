"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
class ProductController {
    constructor(productServie = new product_service_1.default()) {
        Object.defineProperty(this, "productServie", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: productServie
        });
        Object.defineProperty(this, "getAllProducts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (request, reply) => {
                return this.productServie.getProducts();
            }
        });
        Object.defineProperty(this, "getProductById", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (request, reply) => {
                return this.productServie.getProductById(request.params.productId);
            }
        });
        Object.defineProperty(this, "createProduct", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (request, reply) => {
                const productInserted = await this.productServie.createProduct(request.body);
                request.log.debug('dio cane');
                request.log.debug(productInserted._id);
                request.log.info(await this.productServie.getProductById(productInserted._id));
                return this.productServie.getProductById(productInserted._id);
            }
        });
    }
}
exports.default = ProductController;
