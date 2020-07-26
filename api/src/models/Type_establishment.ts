import { model, Schema, Model } from "mongoose";

const TypeEstablishmentSchema : Schema = new Schema({
  name : {
    type : String,
    required : true
  }
})

const TypeEstablishment: Model<Document> = model('establishmentType', TypeEstablishmentSchema);

export { TypeEstablishment }