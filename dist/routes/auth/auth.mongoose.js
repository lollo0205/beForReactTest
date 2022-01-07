"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = exports.AuthEntitySchema = void 0;
const mongoose_1 = require("mongoose");
exports.AuthEntitySchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'users' },
    accessToken: { type: String, required: true },
    idToken: { type: String, required: true },
    expiresIn: { type: Number, required: true },
    tokenType: { type: String, required: false }
});
exports.Auth = (0, mongoose_1.model)('auth', exports.AuthEntitySchema);
//# sourceMappingURL=auth.mongoose.js.map