import expController from "../controller/expController";
import  Router  from "express";
import updateController from "../controller/updateController";
import deleteController from "../controller/deleteController";
import insertController from "../controller/insertController";
import { registerController, usuarios  } from "../controller/registerController";
import { loginController } from "../controller/loginController";


const router = Router();


router.get('/exp', expController);
router.post('/exp', insertController);
router.delete('/exp/:id', deleteController);
router.put('/exp/:id', updateController);
router.post('/user/register', registerController );
router.post('/user/login', loginController );
router.get('/user', usuarios);



export default router;



//crear una ruta con router.post(y lo demas)
//luego en el controller crear el controlador para la ruta post que tiene que sacar los datos de la request, y pasar esos datos al modelo (tiene que haber un metodo o funcion para hacer el insert de la experiencia)


