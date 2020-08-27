import express, { Request, Response, Router } from 'express';
import { TransactionModel } from '../models/Transaction';
import { UserModel, UserType, IUser } from '../models/User';

const transactionsRoutes: Router = express.Router();

transactionsRoutes.post('/create/:establishment_id', async (req : Request, res: Response) => {
  console.log('API !!!!!!!!!!!!!!!!!');

  const user : UserType = (await UserModel.findById((<UserType>req.user).id))!;
  console.log('user :' + user)
  console.log('establishment_id :' + req.params.establishment_id)
  console.log('user_id :' + user._id)
  const transaction = new TransactionModel({
    establishment : req.params.establishment_id,
    user : user._id,
    date : Date.now()
  })
  transaction.save();
  res.json({sucess : true});
})

export { transactionsRoutes }