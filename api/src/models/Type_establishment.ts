import { model, Schema } from "mongoose";

const TypeEstablishmentSchema : Schema = new Schema({
  name : {
    type : String,
    required : true
  }
})

module.exports = model('establishmentType', TypeEstablishmentSchema)