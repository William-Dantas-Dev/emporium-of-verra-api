import { Request, Response } from 'express';
import { createSkill, deleteSkill, getAll, getById, updateSkill } from '../repositories/skill.repository';
import { registerSkillValidation } from '../validations/skill.validation.';

export const create = async(req: Request, res: Response) => {
  try{
    const value = await registerSkillValidation.validate(req.body, { strict: true });
    const skill = await createSkill(req.body, req.body.skillTreeId);
    res.status(200).send(skill);
  }catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const allSkills = await getAll();
    res.status(200).send(allSkills);
  } catch (e: any) {
    res.status(400).send(e);
  }
};

export const getId = async (req: Request, res: Response) => {
  try {
    const getSkill = await getById(Number(req.params.id));
    res.status(200).send(getSkill);
  } catch (e: any) {
    res.status(400).send(e);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const updatedSkill = await updateSkill(Number(req.params.id), req.body);
    res.status(200).send(updatedSkill);
  } catch (e: any) {
    res.status(400).send(e);
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    await deleteSkill(Number(req.params.id));
    res.status(200).send();
  } catch (e: any) {
    res.status(400).send(e);
  }
};