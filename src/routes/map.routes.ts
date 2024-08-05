import { Request, Response, Express } from 'express';
import { create, get, getId, getMapByName, remove, update } from '../controllers/map.controller';

const map = (app: Express) => {
  app.post("/maps", (req: Request, res: Response) => create(req, res));
  app.get("/maps", (req: Request, res: Response) => get(req, res));
  app.get("/mapByName/:name", (req: Request, res: Response) => getMapByName(req, res));
  app.get("/maps/:id", (req: Request, res: Response) => getId(req, res));
  app.put("/maps/:id", (req: Request, res: Response) => update(req, res));
  app.delete("/maps/:id", (req: Request, res: Response) => remove(req, res));
}

export default map;
