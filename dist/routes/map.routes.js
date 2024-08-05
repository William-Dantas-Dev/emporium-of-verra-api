"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var map_controller_1 = require("../controllers/map.controller");
var map = function (app) {
    app.post("/maps", function (req, res) { return (0, map_controller_1.create)(req, res); });
    app.get("/maps", function (req, res) { return (0, map_controller_1.get)(req, res); });
    app.get("/mapByName/:name", function (req, res) { return (0, map_controller_1.getMapByName)(req, res); });
    app.get("/maps/:id", function (req, res) { return (0, map_controller_1.getId)(req, res); });
    app.put("/maps/:id", function (req, res) { return (0, map_controller_1.update)(req, res); });
    app.delete("/maps/:id", function (req, res) { return (0, map_controller_1.remove)(req, res); });
};
exports.default = map;
