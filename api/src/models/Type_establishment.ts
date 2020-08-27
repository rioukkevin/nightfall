import {Document, model, Model, Schema} from "mongoose";

const TypeEstablishmentSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    }
});

interface ITypeEstablishment {
    name: string;
    points: number;
    color: string;
}

type TypeEstablishmentType = ITypeEstablishment & Document;

const TypeEstablishmentModel: Model<TypeEstablishmentType> = model(
    "establishmentTypes",
    TypeEstablishmentSchema
);

export { TypeEstablishmentModel, ITypeEstablishment, TypeEstablishmentType };
