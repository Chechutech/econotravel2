import { Request, Response} from "express";
import { postUser,getUser, } from "../models/userDB";
//import bcrypt from 'bcrypt'



export const loginController = async (req: Request, res: Response) => {
  // obtener email del usuario del JSON del body (req.body.email)
  // obtener el usuario con ese email de la DB
  
  // si no hay usuario con ese email, fuera
  
  // si hay usuario con ese email, comprobar que la password recibida
  // (req.body.password) encaja con la que hay en la DB (bcrypt.compare?)
  
  // si no encaja, fuera

  // si encaja, le damos al usuario un JWT (token firmado) que dice
  // qué usuario es (por ejemplo, la id)

};