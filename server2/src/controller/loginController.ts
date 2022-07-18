import { Request, Response} from "express";
import { postUser,getUser, selectUser} from "../models/userDB";
import bcrypt from 'bcrypt';




/*export const loginController = async (req: Request, res: Response) => {
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
    else

   }
   }

  if (usuario.email.length === 0)
  return res.status(401).json({ error: "error en email" });

  // si no hay usuario con ese email, fuera
  
  // si hay usuario con ese email, comprobar que la password recibida
  const 
  // (req.body.password) encaja con la que hay en la DB (bcrypt.compare?)
  
  // si no encaja, fuera

  // si encaja, le damos al usuario un JWT (token firmado) que dice
  // qué usuario es (por ejemplo, la id)

};*/