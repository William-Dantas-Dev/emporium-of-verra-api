"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillConnectionValidation = void 0;
var yup = require("yup");
exports.skillConnectionValidation = yup.object({
    startPosition: yup.string().required(),
    midPosition: yup.string(),
    endPosition: yup.string().required(),
    startAnchor: yup.string().required(),
    endAnchor: yup.string().required(),
    skillClassId: yup.number(),
    weaponClassId: yup.number(),
});
