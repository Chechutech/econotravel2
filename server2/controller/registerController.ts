import { Request, Response} from "express";
import { postUser,getUser, } from "../models/userDB";
import bcrypt from 'bcrypt'


export const usuarios = async (req: Request, res:Response, ) => {
  try {
    const result = await getUser();
    res.send(JSON.stringify({ "usuarios": 
 result } ))
   
   } catch (err) {
     return res.status(400).json({
       error: err,
     });
   }
    };

export const registerController = async (req: Request, res: Response,) => {
  try {
   
    const usuario = {
      email: req.body.email,
      password: req.body.password
    };
   
       
 if (usuario.email.length === 0)
   return res.status(401).json({ error: "error en email" });
 
 if (usuario.password.length < 8)
 return res.status(401).json({ error: "error en password faltan caracteres" });
   
  
    const saltRound = 10;
   const bcryptPassword = await  bcrypt.hash(usuario.password, saltRound)
   // console.log(bcryptPassword);
    const newUser = await postUser(usuario.email, bcryptPassword );
    //console.log(newUser)
    res.send(JSON.stringify({ "usuarios": 
 newUser } ))
   
   } catch (err) {
     return res.status(400).json({
       error: err,
     });
   }
};
    
