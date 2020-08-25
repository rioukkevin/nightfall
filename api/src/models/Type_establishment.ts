import { model, Schema, Model, Document } from "mongoose";

const TypeEstablishmentSchema : Schema = new Schema({
  name : {
    type : String,
    required : true
  },
  points : {
    type : Number,
    required : true
  }
})

const TypeEstablishment: Model<Document> = model('establishmenttypes', TypeEstablishmentSchema);

export { TypeEstablishment }