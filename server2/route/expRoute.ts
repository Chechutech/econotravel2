import expController from "../controller/expController";
import  Router  from "express";
import updateController from "../controller/updateController";
import pool from "../models/database";

const router = Router();


router.get('/exp', expController);
router.put('/exp/:id', updateController);

export default router;



