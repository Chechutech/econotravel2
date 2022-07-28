import { Request, Response} from "express";
import { selectUser} from "../models/userDB";
import bcrypt from 'bcrypt';
import { NextFunction } from "express";
import jwt from 'jsonwebtoken';


export const loginController = async (req:Request, res: Response, next: NextFunction)=>{

  try {
      // obtiene email y password de la request.
      const {email,password} =req.body;

      if(!email || !password){
        res.send ('password not valid');
         //throw new Error('email or password not exist');
      }

      // llama a la bbdd recupera email y password
      const result = await selectUser(email);
      // compara la password de la request con la password de la bbdd
      const comparePassword = await bcrypt.compare(password, result.password);

      if(comparePassword){res.json({
        token: jwt.sign({id:result.id_usuario},process.env.JWT_SECRET!)})
        
          // si todo va bien llama a next()
          //next();
      } else {
          // si va mal respuesta código 400 las passwords no coinciden
          res.send ('password not valid');
          //new Error('password not valid');
      }


  } catch (error:any) {
      res.status(400).send(error.message);
  }

}


/*
export const loginController = async (req: Request, res:
  Response, next: NextFunction ) => {
   // const id = req.params.id
    try {
      const usuario = {
        email: req.body.eamil,
        password: req.body.password,
      }
      const userLogin = await selectUser(usuario.email);
      if (!userLogin) return res.status(400).send("Invalid Email")
           const validPass = await bcrypt.compare(usuario.
  password, userLogin.password);
      if (!validPass) return res.status(400).send("Invalid Password");
      next();
    } catch (err) {
      return res.status(500).json({err: "error servidor"})
    }
   //const token = jwt.sign(id_usuario)
  }

*/












/*
export const loginController = async (req: Request, res: Response) => {
  // obtener email del usuario del JSON del body (req.body.email)
  const usuario = {
    email: req.body.email,
    password: req.body.password
  };
  // obtener el usuario con ese email de la DB
  const loginUser = await selectUser(usuario)
   if (usuario === undefined){
    res.json({
      error:'Error, email or password not found' 
    })
   } else {
    const validate = bcrypt.compare(req.body.password, usuario.password )
    if (!validate) {
      res.json({
        error: 'Error, email or password not found'
      })
        }
    else {
      

    }

   }
   }
*/
  //if (usuario.email.length === 0)
  //return res.status(401).json({ error: "error en email" });

  // si no hay usuario con ese email, fuera
  
  // si hay usuario con ese email, comprobar que la password recibida
  
  // (req.body.password) encaja con la que hay en la DB (bcrypt.compare?)
  
  // si no encaja, fuera

  // si encaja, le damos al usuario un JWT (token firmado) que dice
  // qué usuario es (por ejemplo, la id)

