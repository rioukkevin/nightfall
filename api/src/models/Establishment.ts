import { Document, model, Model, Schema } from "mongoose";
import { ITypeEstablishment } from "./Type_establishment";
const EstablishmentSchema: Schema = new Schema({
    name: {
        type: String,
        require: true,
    },
    establishment_type_id: {
        type: String,
        required: true,
    },
    address: {
        number: {
            type: String,
            required: false,
        },
        street: {
            type: String,
            required: false,
        },
        zipCode: {
            type: String,
            required: false,
        },
        city: {
            type: String,
            required: false,
        },
        coordinate: {
            latitude: {
                type: Number,
                required: true,
            },
            longitude: {
                type: Number,
                required: true,
            },
        },
    },
    establishment_type: {
        type: Schema.Types.ObjectId,
        ref: "establishmenttypes",
    },
});
interface IEstablishment {
    name: string;
    establishment_type_id: string;
    address: {
        number: string;
        street: string;
        zipCode: string;
        city: string;
        coordinate: {
            latitude: string;
            longitude: number;
        };
    };
    establishment_type: ITypeEstablishment;
}
type EstablishmentType = IEstablishment & Document;
const EstablishmentModel: Model<EstablishmentType> = model(
    "establishments",
    EstablishmentSchema
);
export { EstablishmentModel, IEstablishment, EstablishmentType };
