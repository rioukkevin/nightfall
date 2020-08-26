import express, { Request, Response, Router } from 'express';
import { TypeEstablishment } from '../models/Type_establishment';

const typesEstablishmentRoutes: Router = express.Router();

typesEstablishmentRoutes.get('/', async (req : Request, res: Response) => {
    const typesEstablishments = await TypeEstablishment.find()
    res.json(typesEstablishments)
})

export { typesEstablishmentRoutes }