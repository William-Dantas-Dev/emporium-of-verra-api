import { Request, Response } from 'express';
import { createMap, deleteMap, getAll, getById, getByName, updateMap } from '../repositories/map.repository';
import { mapsValidation } from '../validations/maps.validation';

export const create = async(req: Request, res: Response) => {
  try{
    await mapsValidation.validate(req.body, { strict: true });
    const maps = await createMap(req.body);
    res.status(200).send(maps);
  }catch (e) {
    console.log(e);
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
    const getMap = await getById(Number(req.params.id));
    res.status(200).send(getMap);
  } catch (e: any) {
    res.status(400).send(e);
  }
};

export const getMapByName = async (req: Request, res: Response) => {
  try {
    const getMap = await getByName(req.params.name);
    if(getMap != null){
      res.status(200).send(getMap);
    }else{
      res.status(404).send({"Error": "Dont Found Map"});
    }
  } catch (e: any) {
    res.status(400).send(e);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const updatedMap = await updateMap(Number(req.params.id), req.body);
    res.status(200).send(updatedMap);
  } catch (e: any) {
    res.status(400).send(e);
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    await deleteMap(Number(req.params.id));
    res.status(200).send();
  } catch (e: any) {
    res.status(400).send(e);
  }
};