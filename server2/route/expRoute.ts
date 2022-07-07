
import expController from "../controller/expController";
import  Router  from "express";

const router = Router();


router.get('/exp', expController);

export default router;



