import { Document, model, Model, Schema } from "mongoose";
import { IEstablishment } from "./Establishment";

const TransactionSchema: Schema = new Schema({
    establishment_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    establishment: {
        type: Schema.Types.ObjectId,
        ref: "establishments",
    },
});

interface ITransaction {
    establishment_id: string;
    user_id: string;
    date: string;
    establishment: IEstablishment;
}

type TransactionType = ITransaction & Document;

const TransactionModel: Model<TransactionType> = model(
    "transactions",
    TransactionSchema
);

export { TransactionModel, ITransaction, TransactionType };
