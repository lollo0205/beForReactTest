"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = exports.UsersEntitySchema = void 0;
const mongoose_1 = require("mongoose");
exports.UsersEntitySchema = new mongoose_1.Schema({
    dataOfWhereYouLive: {
        type: Map, of: {
            address: { type: String, required: true },
            houseNumber: { type: Number, required: true },
            city: { type: String, required: true }
        }, required: false
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true }
});
exports.Users = (0, mongoose_1.model)('users', exports.UsersEntitySchema);
//# sourceMappingURL=user.mongoose.js.map