"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isJwtPayload = exports.verifyTokenAndGetPayload = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var secretToken = process.env.SECRET_TOKEN;
var verifyTokenAndGetPayload = function (token) {
    try {
        var decoded = (0, jsonwebtoken_1.verify)(token, String(secretToken));
        return decoded; // Type assertion para JwtPayload
    }
    catch (error) {
        return null;
    }
};
exports.verifyTokenAndGetPayload = verifyTokenAndGetPayload;
var isJwtPayload = function (user) {
    return (user === null || user === void 0 ? void 0 : user.id) !== undefined;
};
exports.isJwtPayload = isJwtPayload;
