import { Request, Response, Express } from 'express';
import { create, get, getId, remove, update } from '../controllers/skillConnection.controller';

const skillConnectionRoutes = (app: Express) => {
  app.post("/skillConnection", (req: Request, res: Response) => create(req, res));
  app.get("/skillConnection", (req: Request, res: Response) => get(req, res));
  app.get("/skillConnection/:id", (req: Request, res: Response) => getId(req, res));
  app.put("/skillConnection/:id", (req: Request, res: Response) => update(req, res));
  app.delete("/skillConnection/:id", (req: Request, res: Response) => remove(req, res));
}

export default skillConnectionRoutes;
