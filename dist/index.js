"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var cors = require('cors');
var routes_1 = require("./routes");
var dotenv = require('dotenv');
dotenv.config();
var app = express();
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});
app.use(cors());
app.use(express.json());
(0, routes_1.default)(app);
app.listen(3001, function () { return console.log("Server is running on http://localhost:3001"); });
