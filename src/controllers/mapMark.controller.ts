import { Request, Response } from 'express';
import { createMapMark, deleteMapMark, getAll, getById, updateMapMark } from '../repositories/mapMark.repository';
import { mapsValidation } from '../validations/maps.validation';

export const create = async(req: Request, res: Response) => {
  try{
    await mapsValidation.validate(req.body, { strict: true });
    const maps = await createMapMark(req.body);
    res.status(200).send(maps);
  }catch (e) {
    res.status(400).send(e);
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const maps = await getAll();
    res.status(200).send(maps);
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
    const updatedMap = await updateMapMark(Number(req.params.id), req.body);
    res.status(200).send(updatedMap);
  } catch (e: any) {
    res.status(400).send(e);
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    await deleteMapMark(Number(req.params.id));
    res.status(200).send();
  } catch (e: any) {
    res.status(400).send(e);
  }
};