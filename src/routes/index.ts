import { Express } from 'express';
import userRoutes from './user.routes';
import authRoutes from './auth.routes';
import skillTreeRoutes from './skillTree.routes';
import skillRoutes from './skill.routes';
import skillConnectionRoutes from './skillConnections.routes';
import map from './map.routes';
import mapMark from './mapMarks.routes';

const routes = (app: Express) => {
  userRoutes(app);
  authRoutes(app);
  skillTreeRoutes(app);
  skillRoutes(app);
  skillConnectionRoutes(app);
  map(app);
  mapMark(app);
}

export default routes;
