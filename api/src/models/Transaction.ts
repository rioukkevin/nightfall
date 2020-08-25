import { model, Schema, Model, Document } from "mongoose";

const TransactionSchema : Schema = new Schema({
  establishment_id : {
    type : String,
    required : true
  },
  user_id : {
    type : String,
    required : true
  },
  date : {
    type : Date,
    default : Date.now
  },
  establishment : {
    type : Schema.Types.ObjectId,
    ref : 'establishments'
  }
})

const Transaction: Model<Document> = model('transactions', TransactionSchema)

export { Transaction }