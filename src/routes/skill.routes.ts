import { Request, Response, Express } from 'express';
import { create, get, getId, remove, update } from '../controllers/skill.controller';

const skillRoutes = (app: Express) => {
  app.post("/skill", (req: Request, res: Response) => create(req, res));
  app.get("/skill", (req: Request, res: Response) => get(req, res));
  app.get("/skill/:id", (req: Request, res: Response) => getId(req, res));
  app.put("/skill/:id", (req: Request, res: Response) => update(req, res));
  app.delete("/skill/:id", (req: Request, res: Response) => remove(req, res));
}

export default skillRoutes;
