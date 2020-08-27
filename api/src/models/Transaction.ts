import { Document, model, Model, Schema } from "mongoose";

const TransactionSchema : Schema = new Schema({
  establishment : {
    type : Schema.Types.ObjectId,
    ref : 'establishments'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  date : {
    type : Date,
    default : Date.now
  }
})

interface ITransaction {
  establishment: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  date: string;
}

type TransactionType = ITransaction & Document;

const TransactionModel: Model<TransactionType> = model(
  "transactions",
  TransactionSchema
);

export { TransactionModel, ITransaction, TransactionType };
