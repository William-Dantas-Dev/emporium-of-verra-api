"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterValidation = exports.registerUserValidation = exports.authValidation = void 0;
var yup = require("yup");
exports.authValidation = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(20),
});
exports.registerUserValidation = yup.object({
    name: yup.string().required().min(3).max(40),
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(20),
    admin: yup.boolean(),
});
exports.characterValidation = yup.object({
    nick: yup.string().required().min(3).max(20),
    server: yup.string().required(),
});
