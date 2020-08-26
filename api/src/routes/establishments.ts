import express, { Request, Response, Router } from 'express';
import { Establishment } from '../models/Establishment';

const establishmentsRoutes: Router = express.Router();

establishmentsRoutes.get('/', async (req : Request, res: Response) => {
    const establishments = await Establishment.find()
    res.json(establishments)
})

export { establishmentsRoutes }