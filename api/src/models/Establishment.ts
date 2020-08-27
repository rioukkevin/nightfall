import { Document, model, Model, Schema } from "mongoose";

const EstablishmentSchema: Schema = new Schema({
    name: {
        type: String,
        require: true,
    },
    establishment_type_id: {
        type: Schema.Types.ObjectId,
        ref: "establishmenttypes",
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
});
interface IEstablishment {
    name: string;
    establishment_type_id: Schema.Types.ObjectId;
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
}
type EstablishmentType = IEstablishment & Document;
const EstablishmentModel: Model<EstablishmentType> = model(
    "establishments",
    EstablishmentSchema
);
export { EstablishmentModel, IEstablishment, EstablishmentType };
