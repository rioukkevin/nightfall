import { model, Schema, Model, Document } from "mongoose";
import { ITypeEstablishment } from "./Type_establishment";

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

interface IEstablishment {
  name: string;
  establishment_type_id: string;
  latitude: string;
  longitude: string;
  establishment_type: ITypeEstablishment
}

type EstablishmentType = IEstablishment & Document;

const EstablishmentModel: Model<Document> = model('establishments', EstablishmentSchema);

export { EstablishmentModel, IEstablishment, EstablishmentType }