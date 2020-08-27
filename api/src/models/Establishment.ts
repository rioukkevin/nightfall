import {Document, model, Model, Schema} from "mongoose";

const EstablishmentSchema: Schema = new Schema({
    name: {
        type: String,
        require: true,
    },
    establishment_type: {
        type: Schema.Types.ObjectId,
        ref: "establishmentTypes",
    },
    address: {
        number: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        zipCode: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
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
    establishment_type: Schema.Types.ObjectId;
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
