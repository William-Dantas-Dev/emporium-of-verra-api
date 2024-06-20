import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { userValidation } from '../validations/user.validation';
import { createUser, deleteUser, getAll, getById, updateUser } from '../repositories/user.repository';
import { JwtPayload, verify } from 'jsonwebtoken';
import { isJwtPayload, verifyTokenAndGetPayload } from '../utils';

export const create = async (req: Request, res: Response) => {
  try {
    await userValidation.validate(req.body);
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashPassword;
    const user = await createUser(req.body);
    res.status(200).send(user);
  } catch (e: any) {
    res.status(400).send(e);
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const users = await getAll();
    res.status(200).send(users);
  } catch (e: any) {
    res.status(400).send(e);
  }
};

export const getId = async (req: Request, res: Response) => {
  try {
    const user = await getById(Number(req.params.id));
    res.status(200).send(user);
  } catch (e: any) {
    res.status(400).send(e);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const user = await updateUser(Number(req.params.id), req.body);
    res.status(200).send(user);
  } catch (e: any) {
    res.status(400).send(e);
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    await deleteUser(Number(req.params.id));
    res.status(200).send();
  } catch (e: any) {
    res.status(400).send(e);
  }
};

export const userProfile = async(req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const token = authHeader.split(' ')[1];
  const user = verifyTokenAndGetPayload(token);

  if (!user || !isJwtPayload(user)) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  const userData = await getById(Number(user.id));
  res.status(200).send({user: userData, session: user});
}