import { model, Schema, Model, Document } from "mongoose";

const EstablishmentSchema : Schema = new Schema({
  establishment_type_id : {
    type : Number,
    required : true
  },
  latitude : {
    type : Number,
    required : true
  },
  longitude : {
    type : Number,
    required : true
  },
})

const Establishment: Model<Document> = model('establishments', EstablishmentSchema);

export { Establishment }