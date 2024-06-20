import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { authValidation } from '../validations/auth.validation';
import { authUser } from '../repositories/auth.repository';
import { sign } from "jsonwebtoken";

const secretToken = process.env.SECRET_TOKEN

export const authenticate = async (req: Request, res: Response) => {
  try {
    await authValidation.validate(req.body);
    const user = await authUser(req.body);
    if(!user){
      res.status(404).send({type: "Error", message: "User Not Found!"});
      return;
    }
    if(user){
      const isValuePassword = await bcrypt.compare(req.body.password, user.password);
      if(!isValuePassword){
        res.status(400).send({type: "Error", message: "Invalid Password"});
        return;
      }
      const token = sign({id: user.id}, `${secretToken}`, {expiresIn: "365d"});
      const { password, ...userWithoutPassword } = user;
      res.status(200).send({user: userWithoutPassword, token});
      return;
    }
    res.status(200).send(user);
  } catch (e: any) {
    res.status(400).send(e);
  }
};
