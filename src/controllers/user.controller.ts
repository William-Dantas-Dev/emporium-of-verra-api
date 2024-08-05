import { Request, Response } from 'express';
import { deleteUser, getAll, getById, updateUser } from '../repositories/user.repository';

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