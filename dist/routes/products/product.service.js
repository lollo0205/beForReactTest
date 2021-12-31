"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_mongoose_1 = require("./products.mongoose");
class ProductService {
    constructor() {
        Object.defineProperty(this, "getProducts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => products_mongoose_1.Product.find().populate(['type'])
        });
        Object.defineProperty(this, "getProductById", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (productId) => products_mongoose_1.Product.findOne({ _id: productId }).populate(['type'])
        });
        Object.defineProperty(this, "createProduct", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (newProduct) => products_mongoose_1.Product.create(newProduct)
        });
    }
}
exports.default = ProductService;
