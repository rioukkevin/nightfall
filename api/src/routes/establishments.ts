import express, {Request, Response, Router} from 'express';
import {EstablishmentModel} from '../models/Establishment';
import {TypeEstablishmentModel} from "../models/Type_establishment";
import {QueryPopulateOptions} from "mongoose";

const establishmentsRoutes: Router = express.Router();

establishmentsRoutes.get('/', async (req: Request, res: Response) => {
  const establishments = await EstablishmentModel.find().populate({
    path: "establishment_type",
    model: TypeEstablishmentModel,
  } as QueryPopulateOptions);

  res.json(establishments)
});

export { establishmentsRoutes }