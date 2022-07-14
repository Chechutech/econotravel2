import {getExperiencias}  from "../models/ExperienciasDB";
import { Request, Response} from "express";


const expController = async (req: Request, res:Response, ) => {
 try {
   const result = await getExperiencias();
   res.send(JSON.stringify({ "experiencias":result } ))
  
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
   };


export default expController;






/*const getExperiencias = async (req:Request, res:Response, ) => {
 try {
   const result = await pool.query('SELECT * FROM experiencias');
   res.send(JSON.stringify({ "experiencias": result.rows } ))
  
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
   };

export default getExperiencias;





/*const getExperiencias = () => {
 let listaExperiencias = new Array<Experiencias>();
 pool.query('SELECT * FROM experiencias', (err: any, res: any) => {
   if (err) {
     console.error(err);
     return;
   }
   for (let row of res.rows) {
     listaExperiencias.push(row);
   }
   console.log(listaExperiencias);
   res.send(JSON.stringify({ "experiencias": listaExperiencias }))
 })
  }
  export default getExperiencias;




  /*const getExperiencias = async (req: Request, res: Response) => {


  try {
          const listaExperiencias = await pool.query('SELECT * FROM experiencias');

    listaExperiencias
              ? res.status(201).send(JSON.stringify({ listaExperiencias }))
              : res.status(500).send("Failed to get data.");

  } catch (error: any) {

      res.status(400).send(error.message);
  }
}

export default getExperiencias;*/


/*const getExperiencias = async (req: Request, res:Response) => {
  const Experiencia: any = await pool.query('SELECT * FROM experiencias');
  res.json({Experiencia})
}
export default getExperiencias;*/


 
 
 
 
 
 

 
 
 

 


//module.exports={ getExperiencias };




/*const expController = async () => {

  
  const res =await pool.connect()
    await pool.query('SELECT * FROM experiencias'
  );

  console.log(res.rows);
};
expController();
  
export default expController;*/