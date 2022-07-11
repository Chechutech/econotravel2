import pool from "../models/database";
import {getExperiencias}  from "../models/ExperienciasDB";
import { Request, Response} from "express";


const addController = async (req: Request, res:Response, ) => {
 try {
   const result = await postExperiencia();
   res.send(JSON.stringify({ "experiencias": 
result } ))
  
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
   };

export default addController;
