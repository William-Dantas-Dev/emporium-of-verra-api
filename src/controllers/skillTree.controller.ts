import { NextFunction, Request, Response } from 'express';
import { createSkillTree, deleteSkillTree, getAll, getById, getByName, updateSkillTree } from '../repositories/skillTree.repository';
import { skillTreeValidation } from '../validations/skillTree.validation';

export const create = async(req: Request, res: Response) => {
  try{
    await skillTreeValidation.validate(req.body, { strict: true });
    const item = await createSkillTree(req.body);
    res.status(200).send(item);
  }catch (e) {
    res.status(400).send(e);
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const allSkillTree = await getAll();
    res.status(200).send(allSkillTree);
  } catch (e: any) {
    res.status(400).send(e);
  }
};

export const getId = async (req: Request, res: Response) => {
  try {
    const getSkillTree = await getById(Number(req.params.id));
    res.status(200).send(getSkillTree);
  } catch (e: any) {
    res.status(400).send(e);
  }
};

export const getSkillTreeByName = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const SkillTree = await getByName(req.params.name);
    if (SkillTree == null) {
      return res.status(404).send({ Error: "Not Found SkillTree" });
    }
    return res.status(200).send(SkillTree);
  } catch (e: any) {
    return next(e); // Passa o erro para o middleware de tratamento de erros
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const updatedSkillTree = await updateSkillTree(Number(req.params.id), req.body);
    res.status(200).send(updatedSkillTree);
  } catch (e: any) {
    res.status(400).send(e);
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    await deleteSkillTree(Number(req.params.id));
    res.status(200).send();
  } catch (e: any) {
    res.status(400).send(e);
  }
};