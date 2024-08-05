"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapsValidation = void 0;
var yup = require("yup");
exports.mapsValidation = yup.object({
    name: yup.string().required(),
    image: yup.string().required(),
});
