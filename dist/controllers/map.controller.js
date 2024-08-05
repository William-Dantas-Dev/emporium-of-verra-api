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
exports.remove = exports.update = exports.getMapByName = exports.getId = exports.get = exports.create = void 0;
var map_repository_1 = require("../repositories/map.repository");
var maps_validation_1 = require("../validations/maps.validation");
var create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var maps, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, maps_validation_1.mapsValidation.validate(req.body, { strict: true })];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, map_repository_1.createMap)(req.body)];
            case 2:
                maps = _a.sent();
                res.status(200).send(maps);
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                console.log(e_1);
                res.status(400).send(e_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.create = create;
var get = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var maps, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, map_repository_1.getAll)()];
            case 1:
                maps = _a.sent();
                res.status(200).send(maps);
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                res.status(400).send(e_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.get = get;
var getId = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var getMap, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, map_repository_1.getById)(Number(req.params.id))];
            case 1:
                getMap = _a.sent();
                res.status(200).send(getMap);
                return [3 /*break*/, 3];
            case 2:
                e_3 = _a.sent();
                res.status(400).send(e_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getId = getId;
var getMapByName = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var getMap, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, map_repository_1.getByName)(req.params.name)];
            case 1:
                getMap = _a.sent();
                if (getMap != null) {
                    res.status(200).send(getMap);
                }
                else {
                    res.status(404).send({ "Error": "Dont Found Map" });
                }
                return [3 /*break*/, 3];
            case 2:
                e_4 = _a.sent();
                res.status(400).send(e_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getMapByName = getMapByName;
var update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedMap, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, map_repository_1.updateMap)(Number(req.params.id), req.body)];
            case 1:
                updatedMap = _a.sent();
                res.status(200).send(updatedMap);
                return [3 /*break*/, 3];
            case 2:
                e_5 = _a.sent();
                res.status(400).send(e_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.update = update;
var remove = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var e_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, map_repository_1.deleteMap)(Number(req.params.id))];
            case 1:
                _a.sent();
                res.status(200).send();
                return [3 /*break*/, 3];
            case 2:
                e_6 = _a.sent();
                res.status(400).send(e_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.remove = remove;
