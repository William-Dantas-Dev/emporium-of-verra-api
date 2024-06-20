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

  // if(!authorization){
  //   return res.status(401).json({ error: "Token not provided" });
  // }

  // const [, token] = authorization.split(" ");
  // try{
  //   const decoded = verify(token, `${secretToken}`);
  //   const { id } = decoded as TokenPayload;
  //   req.userId = id;
  //   next();
  // }catch(error){
  //   return res.status(401).json({ error: "Invalid Token" });
  // }
}