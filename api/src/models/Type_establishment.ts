import { Document, model, Model, Schema } from "mongoose";

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

const TypeEstablishment: Model<Document> = model("establishmentType", TypeEstablishmentSchema);

export { TypeEstablishment };
