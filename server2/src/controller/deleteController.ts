import { deleteExperiencias }  from "../models/ExperienciasDB";
import { Request, Response} from "express";

const deleteController = async (req: Request, res:Response) => {
 try {
   const id = req.params.id
      const result = await deleteExperiencias (parseInt(id));
   //res.send(JSON.stringify({ "experiencias": 
//result } ))
res.status(200).json({ message:`Tu experiencia ${result.id_experiencias} ha sido borrada con éxito.`})
  
  } catch (err:any) {
    res.status(400).json({
        error: err,
      });
    //return res.status(200).json({ `Tu experiencia ${id_experiencias} ha sido borrada con éxito.`})
      //error: err,
    };
  };


export default deleteController;