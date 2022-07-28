import jwt from 'jsonwebtoken';
import { Request, Response} from "express";
import { NextFunction } from "express";


export const authMiddleware = async (req:Request, res: Response, next: NextFunction)=>{
    if (verifyToken(req)) { 
        next()} 
        else{
        res.send("you are not authenticated")
    }

}

export const verifyToken = (req:Request) => {
    const authorization = req.get('authorization');

    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {

        let token= authorization.substring(7)
        try {
            jwt.verify(token, process.env.JWT_SECRET!);
        return true }        
        catch { 
            return false
        }} else {
        
        return false;
    
    }
}

