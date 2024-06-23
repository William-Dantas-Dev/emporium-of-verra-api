import { Request, Response, Express } from 'express';
import { get, getId, remove, update } from '../controllers/user.controller';

const userRoutes = (app: Express) => {
  app.get("/user", (req: Request, res: Response) => get(req, res));
  app.get("/user/:id", (req: Request, res: Response) => getId(req, res));
  app.put("/user/:id", (req: Request, res: Response) => update(req, res));
  app.delete("/user/:id", (req: Request, res: Response) => remove(req, res));
}

export default userRoutes;
