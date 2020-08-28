import express, {Request, Response, Router} from 'express';
import {TransactionModel} from '../models/Transaction';
import {UserModel, UserType} from '../models/User';
import {EstablishmentModel} from "../models/Establishment";
import {TypeEstablishmentModel} from "../models/Type_establishment";

const transactionsRoutes: Router = express.Router();

transactionsRoutes.post('/create/:establishment_id', async (req: Request, res: Response) => {
  const user: UserType = (await UserModel.findById((<UserType>req.user).id))!;
  const transaction = new TransactionModel({
    establishment: req.params.establishment_id,
    user: user._id,
    date: Date.now()
  })
  await transaction.save();

  let result = await EstablishmentModel.find({
    _id: req.params.establishment_id,
  }).populate({
    path: "establishment_type",
    model: TypeEstablishmentModel,
  });

  res.json({transaction: result});
});

export { transactionsRoutes }