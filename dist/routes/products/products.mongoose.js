"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.ProductsEntitySchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProductsEntitySchema = new mongoose_1.Schema({
    type: { type: mongoose_1.Schema.Types.ObjectId, ref: 'type_products' },
    type2: { type: mongoose_1.Schema.Types.ObjectId, ref: 'type_products' },
    image: { type: String, required: true },
    price: { type: String, required: true },
    name: { type: String, required: true },
    qtaStock: { type: String, required: true }
});
exports.Product = (0, mongoose_1.model)('products', exports.ProductsEntitySchema);
