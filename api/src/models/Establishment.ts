import { model, Schema, Model, Document } from "mongoose";

const EstablishmentSchema : Schema = new Schema({
  name : {
    type : String,
    require : true
  },
  establishment_type_id : {
    type : String,
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
  establishment_type: {
    type : Schema.Types.ObjectId,
    ref : 'establishmenttypes'
  }
})

const Establishment: Model<Document> = model('establishments', EstablishmentSchema);

export { Establishment }