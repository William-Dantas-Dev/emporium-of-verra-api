"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSkillValidation = exports.registerChooseablePassiveValidation = void 0;
var yup = require("yup");
exports.registerChooseablePassiveValidation = yup.object({
    image: yup.string().required().min(3),
    name: yup.string().required().min(3).max(40),
    description: yup.string().required().min(3).max(100),
});
exports.registerSkillValidation = yup.object({
    image: yup.string().required().min(3),
    name: yup.string().required().min(3).max(40),
    description: yup.string().required().min(3),
    isActiveSkill: yup.boolean(),
    level: yup.number().nullable(),
    cooldown: yup.number().nullable(),
    range: yup.number().nullable(),
    position: yup.number().required(),
    registerChooseablePassiveValidation: yup.array().of(exports.registerChooseablePassiveValidation),
});
