import {insertExperiencias}  from "../models/ExperienciasDB";
import { Request, Response} from "express";

const insertController = async (req: Request, res:Response) => {
    try {
      const experiencia = {
        id_experiencias: req.body.id_experiencias,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        precio:req.body.precio ,
        ubicacion: req.body.ubicacion,
        transporte:req.body.transporte,
        duracion:req.body.duracion,
        accesibilidad:req.body.accesibilidad,
        tiempo_duracion:req.body.tiempo_duracion,
        img_url:req.body.img_url
      }
      //console.log(req.body)
         const result = await insertExperiencias (experiencia);
     
   res.status(200).json({ message:`Tu experiencia ${result.id_experiencias} ha sido insertada con éxito.`})
     
     } catch (err:any) {
       res.status(400).json({
           error: err,
         });
       
       };

    }



export default insertController;

