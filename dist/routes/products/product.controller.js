"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = __importDefault(require("./product.service"));
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
                return this.productServie.getProductById(productInserted._id);
            }
        });
    }
}
exports.default = ProductController;
