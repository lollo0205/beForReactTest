"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_mock_1 = require("./products.mock");
class ProductService {
    constructor() {
        Object.defineProperty(this, "products", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: products_mock_1.products
        });
        Object.defineProperty(this, "getProducts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return [...this.products];
            }
        });
    }
}
exports.default = ProductService;
