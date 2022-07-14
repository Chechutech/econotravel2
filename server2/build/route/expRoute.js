"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var expController_1 = __importDefault(require("../controller/expController"));
var express_1 = __importDefault(require("express"));
var updateController_1 = __importDefault(require("../controller/updateController"));
var deleteController_1 = __importDefault(require("../controller/deleteController"));
var insertController_1 = __importDefault(require("../controller/insertController"));
var registerController_1 = require("../controller/registerController");
var router = (0, express_1["default"])();
router.get('/exp', expController_1["default"]);
router.post('/exp', insertController_1["default"]);
router["delete"]('/exp/:id', deleteController_1["default"]);
router.put('/exp/:id', updateController_1["default"]);
router.post('/user/register', registerController_1.registerController);
router.get('/user', registerController_1.usuarios);
exports["default"] = router;
//crear una ruta con router.post(y lo demas)
//luego en el controller crear el controlador para la ruta post que tiene que sacar los datos de la request, y pasar esos datos al modelo (tiene que haber un metodo o funcion para hacer el insert de la experiencia)
