import expController from "../controller/expController";
import  Router  from "express";
import updateController from "../controller/updateController";
import pool from "../models/database";
import deleteController from "../controller/deleteController";
const router = Router();


router.get('/exp', expController);
router.delete('/exp/:id', deleteController);
router.put('/exp/:id', updateController);

export default router;



