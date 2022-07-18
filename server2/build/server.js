"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var expRoute_1 = __importDefault(require("./route/expRoute"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
//const experienciaLista = require('./controller/getExperiencias')
dotenv_1["default"].config();
var app = (0, express_1["default"])();
var port = process.env.PORT || 8000;
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use(expRoute_1["default"]);
app.listen(port, function () {
    console.log("listening on http://localhost:".concat(port));
});
