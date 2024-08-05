import { Request, Response, Express } from 'express';
import { create, get, getId, remove, update } from '../controllers/mapMark.controller';

const mapMark = (app: Express) => {
  app.post("/mapMarks", (req: Request, res: Response) => create(req, res));
  app.get("/mapMarks", (req: Request, res: Response) => get(req, res));
  app.get("/mapMarks/:id", (req: Request, res: Response) => getId(req, res));
  app.put("/mapMarks/:id", (req: Request, res: Response) => update(req, res));
  app.delete("/mapMarks/:id", (req: Request, res: Response) => remove(req, res));
}

export default mapMark;