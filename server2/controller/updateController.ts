import {updateExperiencias}  from "../models/ExperienciasDB";
import { Request, Response} from "express";

const updateController = async (req: Request, res:Response, ) => {
 try {
   const id = req.params.id
   const experiencia = {
    precio: req.body.precio,
    ubicacion: req.body.ubicacion
   }
   const result = await updateExperiencias (parseInt(id), experiencia);
   res.send(JSON.stringify({ "experiencias": 
result } ))
  
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
   };

export default updateController;