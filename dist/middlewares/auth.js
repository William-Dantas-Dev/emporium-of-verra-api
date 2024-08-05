"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var secretToken = process.env.SECRET_TOKEN;
var AuthMiddleware = function (req, res, next) {
    var token = req.headers.authorization;
    if (!token) {
        return res.status(401).send({ message: "Token Not Provided" });
    }
    try {
        var replace = token.replace("Bearer ", "");
        var decoded = (0, jsonwebtoken_1.verify)(replace, String(secretToken));
        next();
    }
    catch (e) {
        return res.status(401).send({ message: "Invalid Token" });
    }
};
exports.AuthMiddleware = AuthMiddleware;
