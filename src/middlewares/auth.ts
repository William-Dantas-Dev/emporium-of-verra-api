import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';


type TokenPayload = {
  id: string;
  iat: number;
  exp: number;
}

const secretToken = process.env.SECRET_TOKEN

export const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if(!token){
    return res.status(401).send({ message: "Token Not Provided"})
  }

  try{
    const replace = token.replace("Bearer ", "");
    const decoded = verify(replace, String(secretToken));
    next();
  }catch(e){
    return res.status(401).send({ message: "Invalid Token"})
  }
}