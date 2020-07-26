import { model, Schema } from "mongoose";

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

module.exports = model('establishments', EstablishmentSchema)