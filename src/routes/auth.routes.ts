import { Request, Response, Express } from 'express';
import { authenticate, register } from '../controllers/auth.controller';

const authRoutes = (app: Express) => {
  app.post("/login", (req: Request, res: Response) => authenticate(req, res));
  app.post("/register", (req: Request, res: Response) => register(req, res));
}

export default authRoutes;
