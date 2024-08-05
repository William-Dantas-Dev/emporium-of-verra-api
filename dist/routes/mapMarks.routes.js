"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mapMark_controller_1 = require("../controllers/mapMark.controller");
var mapMark = function (app) {
    app.post("/mapMarks", function (req, res) { return (0, mapMark_controller_1.create)(req, res); });
    app.get("/mapMarks", function (req, res) { return (0, mapMark_controller_1.get)(req, res); });
    app.get("/mapMarks/:id", function (req, res) { return (0, mapMark_controller_1.getId)(req, res); });
    app.put("/mapMarks/:id", function (req, res) { return (0, mapMark_controller_1.update)(req, res); });
    app.delete("/mapMarks/:id", function (req, res) { return (0, mapMark_controller_1.remove)(req, res); });
};
exports.default = mapMark;
