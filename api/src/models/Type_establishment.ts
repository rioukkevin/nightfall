import { model, Schema, Model, Document } from "mongoose";

const TypeEstablishmentSchema : Schema = new Schema({
  name : {
    type : String,
    required : true
  }
})

const TypeEstablishment: Model<Document> = model('establishmentType', TypeEstablishmentSchema);

export { TypeEstablishment }