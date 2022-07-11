
import expController from "../controller/expController";
import  Router  from "express";

const router = Router();


router.get('/exp', expController);
router.post('/exp', expController); 

export default router;



//crear una ruta con router.post(y lo demas)
//luego en el controller crear el controlador para la ruta post que tiene que sacar los datos de la request, y pasar esos datos al modelo (tiene que haber un metodo o funcion para hacer el insert de la experiencia)


