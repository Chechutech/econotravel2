
import expController  from "../controller/expController";
import deleteController from "../controller/deleteController"
import  Router  from "express";

const router = Router();


router.get('/exp', expController);
router.delete('/exp/:id', deleteController);

export default router;



