import { Document, model, Model, Schema } from "mongoose";

const TransactionSchema : Schema = new Schema({
  establishment : {
    type : Schema.Types.ObjectId,
    ref : 'establishments'
  },
  user_id : {
    type : String,
    required : true
  },
  date : {
    type : Date,
    default : Date.now
  }
})

interface ITransaction {
  establishment: Schema.Types.ObjectId;
  user_id: string;
  date: string;
}

type TransactionType = ITransaction & Document;

const TransactionModel: Model<TransactionType> = model(
    "transactions",
    TransactionSchema
);

export { TransactionModel, ITransaction, TransactionType };
