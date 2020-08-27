import express, { Request, Response, Router } from 'express';
import { EstablishmentModel } from '../models/Establishment';

const establishmentsRoutes: Router = express.Router();

establishmentsRoutes.get('/', async (req : Request, res: Response) => {
  const establishments = await EstablishmentModel.find()
  res.json(establishments)
})

export { establishmentsRoutes }