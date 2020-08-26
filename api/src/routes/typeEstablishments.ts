import express, { Request, Response, Router } from 'express';
import { TypeEstablishmentModel } from '../models/Type_establishment';

const typesEstablishmentRoutes: Router = express.Router();

typesEstablishmentRoutes.get('/', async (req : Request, res: Response) => {
  const typesEstablishments = await TypeEstablishmentModel.find()
  res.json(typesEstablishments)
})

export { typesEstablishmentRoutes }