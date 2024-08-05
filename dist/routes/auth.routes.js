"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_controller_1 = require("../controllers/auth.controller");
var authRoutes = function (app) {
    app.post("/login", function (req, res) { return (0, auth_controller_1.authenticate)(req, res); });
    app.post("/register", function (req, res) { return (0, auth_controller_1.register)(req, res); });
};
exports.default = authRoutes;
