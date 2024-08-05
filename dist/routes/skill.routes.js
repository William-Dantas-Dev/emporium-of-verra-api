"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var skill_controller_1 = require("../controllers/skill.controller");
var skillRoutes = function (app) {
    app.post("/skill", function (req, res) { return (0, skill_controller_1.create)(req, res); });
    app.get("/skill", function (req, res) { return (0, skill_controller_1.get)(req, res); });
    app.get("/skill/:id", function (req, res) { return (0, skill_controller_1.getId)(req, res); });
    app.put("/skill/:id", function (req, res) { return (0, skill_controller_1.update)(req, res); });
    app.delete("/skill/:id", function (req, res) { return (0, skill_controller_1.remove)(req, res); });
};
exports.default = skillRoutes;
