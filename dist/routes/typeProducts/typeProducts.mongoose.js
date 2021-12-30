"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeProducts = exports.typeProducstEntitySchema = void 0;
const mongoose_1 = require("mongoose");
exports.typeProducstEntitySchema = new mongoose_1.Schema({
    name: { type: String, required: true }
});
exports.TypeProducts = (0, mongoose_1.model)('type_products', exports.typeProducstEntitySchema);
