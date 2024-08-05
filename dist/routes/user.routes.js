"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_controller_1 = require("../controllers/user.controller");
var userRoutes = function (app) {
    app.get("/user", function (req, res) { return (0, user_controller_1.get)(req, res); });
    app.get("/user/:id", function (req, res) { return (0, user_controller_1.getId)(req, res); });
    app.put("/user/:id", function (req, res) { return (0, user_controller_1.update)(req, res); });
    app.delete("/user/:id", function (req, res) { return (0, user_controller_1.remove)(req, res); });
};
exports.default = userRoutes;
