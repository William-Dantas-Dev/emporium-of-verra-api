import { Request, Response, NextFunction, Express } from 'express';
import { create, get, getSkillTreeByName, getId, remove, update } from '../controllers/skillTree.controller';

const skillTreeRoutes = (app: Express) => {
  app.post("/skillTree", async (req: Request, res: Response, next: NextFunction) => {
    try {
      await create(req, res);
    } catch (error) {
      next(error);
    }
  });

  app.get("/skillTree", async (req: Request, res: Response, next: NextFunction) => {
    try {
      await get(req, res);
    } catch (error) {
      next(error);
    }
  });

  app.get("/skillTreeByName/:name", async (req: Request, res: Response, next: NextFunction) => {
    try {
      await getSkillTreeByName(req, res, next);
    } catch (error) {
      next(error);
    }
  });

  app.get("/skillTree/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
      await getId(req, res);
    } catch (error) {
      next(error);
    }
  });

  app.put("/skillTree/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
      await update(req, res);
    } catch (error) {
      next(error);
    }
  });

  app.delete("/skillTree/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
      await remove(req, res);
    } catch (error) {
      next(error);
    }
  });
};

export default skillTreeRoutes;
