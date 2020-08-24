import express, { Request, Response, Router } from 'express';
import { User } from '../models/User';
import { Document } from 'mongoose';

const establishmentsRoutes: Router = express.Router();

establishmentsRoutes.get('/', async (req : Request, res: Response) => {

})

export { establishmentsRoutes }