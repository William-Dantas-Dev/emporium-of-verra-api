"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSkillTree = exports.updateSkillTree = exports.getByName = exports.getById = exports.getAll = exports.createSkillTree = void 0;
var prisma_1 = require("../services/prisma");
var createSkillTree = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var SkillTree;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma_1.prisma.skillTree.create({
                    data: data,
                    select: {
                        id: true,
                        name: true,
                        backgroundImage: true,
                        description: true,
                        type: true,
                        lineQty: true,
                        positionsQty: true,
                        minWidth: true,
                        maxWidth: true,
                        createdAt: true,
                        updatedAt: true,
                    }
                })];
            case 1:
                SkillTree = _a.sent();
                return [2 /*return*/, SkillTree];
        }
    });
}); };
exports.createSkillTree = createSkillTree;
var getAll = function () { return __awaiter(void 0, void 0, void 0, function () {
    var skillTree;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma_1.prisma.skillTree.findMany({
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        backgroundImage: true,
                        type: true,
                        skills: true,
                        lineQty: true,
                        positionsQty: true,
                        minWidth: true,
                        maxWidth: true,
                        SkillConnection: true,
                        createdAt: true,
                        updatedAt: true,
                    }
                })];
            case 1:
                skillTree = _a.sent();
                return [2 /*return*/, skillTree];
        }
    });
}); };
exports.getAll = getAll;
var getById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var skillTree;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma_1.prisma.skillTree.findUnique({
                    where: {
                        id: id
                    },
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        backgroundImage: true,
                        type: true,
                        lineQty: true,
                        positionsQty: true,
                        minWidth: true,
                        maxWidth: true,
                        skills: true,
                        SkillConnection: true,
                        createdAt: true,
                        updatedAt: true,
                    }
                })];
            case 1:
                skillTree = _a.sent();
                return [2 /*return*/, skillTree];
        }
    });
}); };
exports.getById = getById;
var getByName = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    var skillTree;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma_1.prisma.skillTree.findUnique({
                    where: {
                        name: name.charAt(0).toUpperCase() + name.slice(1)
                    },
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        lineQty: true,
                        positionsQty: true,
                        minWidth: true,
                        maxWidth: true,
                        backgroundImage: true,
                        type: true,
                        skills: {
                            select: {
                                id: true,
                                image: true,
                                name: true,
                                description: true,
                                isActiveSkill: true,
                                isStartSkill: true,
                                nivel: true,
                                cooldown: true,
                                tooltipDirection: true,
                                range: true,
                                cost: true,
                                manaCost: true,
                                skillPreview: true,
                                line: true,
                                position: true,
                                castTime: true,
                                isDefaultActive: true,
                                costToActive: true,
                                skillTreeId: true,
                                createdAt: true,
                                updatedAt: true,
                                EffectSkills: {
                                    select: {
                                        id: true,
                                        image: true,
                                        name: true,
                                        description: true,
                                    }
                                },
                                chooseableSkills: {
                                    select: {
                                        id: true,
                                        image: true,
                                        name: true,
                                        description: true,
                                        isActiveSkill: true,
                                        isStartSkill: true,
                                        skillId: true,
                                    }
                                }
                            }
                        },
                        SkillConnection: true,
                        createdAt: true,
                        updatedAt: true,
                    }
                })];
            case 1:
                skillTree = _a.sent();
                return [2 /*return*/, skillTree];
        }
    });
}); };
exports.getByName = getByName;
var updateSkillTree = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
    var skillTree;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma_1.prisma.skillTree.update({
                    where: {
                        id: id
                    },
                    data: data,
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        backgroundImage: true,
                        type: true,
                        lineQty: true,
                        positionsQty: true,
                        minWidth: true,
                        maxWidth: true,
                        skills: true,
                        SkillConnection: true,
                        createdAt: true,
                        updatedAt: true,
                    }
                })];
            case 1:
                skillTree = _a.sent();
                return [2 /*return*/, skillTree];
        }
    });
}); };
exports.updateSkillTree = updateSkillTree;
var deleteSkillTree = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma_1.prisma.skillTree.delete({
                    where: {
                        id: id
                    },
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.deleteSkillTree = deleteSkillTree;
