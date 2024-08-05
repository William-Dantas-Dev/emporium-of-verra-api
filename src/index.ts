const express  = require('express');
import { Request, Response, NextFunction } from "express";
const cors = require('cors');
import routes from './routes';
const dotenv = require('dotenv');
dotenv.config();


const app = express();

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.use(cors());
app.use(express.json());

routes(app);

app.listen(3001, () => console.log("Server is running on http://localhost:3001"));
