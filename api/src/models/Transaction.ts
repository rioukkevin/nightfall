import { model, Schema } from "mongoose";

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

module.exports = model('transactions', TransactionSchema)