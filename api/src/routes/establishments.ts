import express, { Request, Response, Router } from 'express';

const establishmentsRoutes: Router = express.Router();

establishmentsRoutes.get('/', async (req : Request, res: Response) => {

})

export { establishmentsRoutes }