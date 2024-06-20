import { Request, Response, Express } from 'express';
import { create, get, getId, remove, update, userProfile} from '../controllers/user.controller';
import { AuthMiddleware } from '../middlewares/auth';

const userRoutes = (app: Express) => {
  app.post("/user", (req: Request, res: Response) => create(req, res));
  app.get("/userProfile", AuthMiddleware, (req: Request, res: Response) => userProfile(req, res));
  app.get("/user/", (req: Request, res: Response) => get(req, res));
  app.get("/user/:id", (req: Request, res: Response) => getId(req, res));
  app.put("/user/:id", (req: Request, res: Response) => update(req, res));
  app.delete("/user/:id", (req: Request, res: Response) => remove(req, res));
}

export default userRoutes;
