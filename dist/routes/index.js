"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_routes_1 = require("./user.routes");
var auth_routes_1 = require("./auth.routes");
var skillTree_routes_1 = require("./skillTree.routes");
var skill_routes_1 = require("./skill.routes");
var skillConnections_routes_1 = require("./skillConnections.routes");
var map_routes_1 = require("./map.routes");
var mapMarks_routes_1 = require("./mapMarks.routes");
var routes = function (app) {
    (0, user_routes_1.default)(app);
    (0, auth_routes_1.default)(app);
    (0, skillTree_routes_1.default)(app);
    (0, skill_routes_1.default)(app);
    (0, skillConnections_routes_1.default)(app);
    (0, map_routes_1.default)(app);
    (0, mapMarks_routes_1.default)(app);
};
exports.default = routes;
