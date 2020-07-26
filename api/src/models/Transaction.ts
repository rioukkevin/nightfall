import { model, Schema, Model } from "mongoose";

const TransactionSchema : Schema = new Schema({
  establishment_id : {
    type : String,
    required : true
  },
  user_id : {
    type : Number,
    required : true
  },
  date : {
    type : Date,
    default : Date.now
  },
})

const Transaction: Model<Document> = model('transactions', TransactionSchema)

export { Transaction }