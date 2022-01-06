"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_controller_1 = __importDefault(require("./product.controller"));
const products_chema_1 = __importDefault(require("./products.chema"));
const productController = new product_controller_1.default();
const productSchema = new products_chema_1.default();
const products = async (fastify, opts) => {
    fastify.get('/', { schema: productSchema.getAllProductSchema() }, productController.getAllProducts);
    fastify.post('/', { schema: productSchema.createProductSchema() }, productController.createProduct);
    fastify.get('/:productId', { schema: productSchema.productFindIdSchema() }, productController.getProductById);
};
exports.default = products;
//# sourceMappingURL=products.route.js.map