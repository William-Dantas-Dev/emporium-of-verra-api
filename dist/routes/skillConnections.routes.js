"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var skillConnection_controller_1 = require("../controllers/skillConnection.controller");
var skillConnectionRoutes = function (app) {
    app.post("/skillConnection", function (req, res) { return (0, skillConnection_controller_1.create)(req, res); });
    app.get("/skillConnection", function (req, res) { return (0, skillConnection_controller_1.get)(req, res); });
    app.get("/skillConnection/:id", function (req, res) { return (0, skillConnection_controller_1.getId)(req, res); });
    app.put("/skillConnection/:id", function (req, res) { return (0, skillConnection_controller_1.update)(req, res); });
    app.delete("/skillConnection/:id", function (req, res) { return (0, skillConnection_controller_1.remove)(req, res); });
};
exports.default = skillConnectionRoutes;
