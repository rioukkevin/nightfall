import express, { Request, Response, Router } from 'express';

const transactionsRoutes: Router = express.Router();

transactionsRoutes.get('/', async (req : Request, res: Response) => {

})

export { transactionsRoutes }