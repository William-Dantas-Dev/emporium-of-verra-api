import { Request, Response, Express } from 'express';
import { authenticate } from '../controllers/auth.controller';

const authRoutes = (app: Express) => {
  app.post("/auth", (req: Request, res: Response) => authenticate(req, res));
}

export default authRoutes;
