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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.authenticate = void 0;
var bcrypt_1 = require("bcrypt");
var bcrypt = require("bcrypt");
var auth_validation_1 = require("../validations/auth.validation");
var auth_repository_1 = require("../repositories/auth.repository");
var jsonwebtoken_1 = require("jsonwebtoken");
var secretToken = process.env.SECRET_TOKEN;
var authenticate = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, isValuePassword, token, password, userWithoutPassword, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, auth_validation_1.authValidation.validate(req.body)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, auth_repository_1.authUser)(req.body)];
            case 2:
                user = _a.sent();
                if (!user) {
                    res.status(404).send({ type: "Error", message: "User Not Found!" });
                    return [2 /*return*/];
                }
                if (!user) return [3 /*break*/, 4];
                return [4 /*yield*/, bcrypt.compare(req.body.password, user.password)];
            case 3:
                isValuePassword = _a.sent();
                if (!isValuePassword) {
                    res.status(400).send({ type: "Error", message: "Invalid Password" });
                    return [2 /*return*/];
                }
                token = (0, jsonwebtoken_1.sign)({ id: user.id }, "".concat(secretToken), { expiresIn: "365d" });
                password = user.password, userWithoutPassword = __rest(user, ["password"]);
                res.status(200).send({ user: userWithoutPassword, token: token });
                return [2 /*return*/];
            case 4:
                res.status(200).send(user);
                return [3 /*break*/, 6];
            case 5:
                e_1 = _a.sent();
                res.status(400).send(e_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.authenticate = authenticate;
var register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var hashPassword, user, token, password, userWithoutPassword, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                return [4 /*yield*/, auth_validation_1.registerUserValidation.validate(req.body.user)];
            case 1:
                _a.sent();
                if (!req.body.character) return [3 /*break*/, 3];
                return [4 /*yield*/, auth_validation_1.characterValidation.validate(req.body.character)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3: return [4 /*yield*/, (0, bcrypt_1.hash)(req.body.user.password, 10)];
            case 4:
                hashPassword = _a.sent();
                req.body.user.password = hashPassword;
                return [4 /*yield*/, (0, auth_repository_1.registerUser)(req.body)];
            case 5:
                user = _a.sent();
                token = (0, jsonwebtoken_1.sign)({ id: user.id }, "".concat(secretToken), { expiresIn: "365d" });
                password = user.password, userWithoutPassword = __rest(user, ["password"]);
                res.status(200).send({ user: userWithoutPassword, token: token });
                return [3 /*break*/, 7];
            case 6:
                e_2 = _a.sent();
                res.status(400).send(e_2);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.register = register;