"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthSchema {
    constructor() {
        Object.defineProperty(this, "authCallbackSchema", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return {
                    querystring: {
                        required: ['provider'],
                        provider: { type: 'string', required: true }
                    }
                };
            }
        });
    }
}
exports.default = AuthSchema;
//# sourceMappingURL=auth.schema.js.map