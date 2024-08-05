"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillTreeValidation = void 0;
var yup = require("yup");
exports.skillTreeValidation = yup.object({
    name: yup.string().required().min(3).max(40),
    description: yup.string().required().min(3).max(100),
    backgroundImage: yup.string().required().min(3).max(200),
});
