import express, { Request, Response, Router } from 'express';
import { Transaction } from '../models/Transaction';

const transactionsRoutes: Router = express.Router();

transactionsRoutes.post('/create/:establishment_id', async (req : Request, res: Response) => {
  //TODO remplace par le user connecté
  const transaction = new Transaction({
    establishment_id : req.params.establishment_id,
    user_id : 1,
    date : Date.now()
  })
  transaction.save();
  res.json({sucess : true});
})

export { transactionsRoutes }