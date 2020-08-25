import { Document, model, Model, Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const UserSchema: Schema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

interface User {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

UserSchema.plugin(uniqueValidator);

const User: Model<Document> = model("users", UserSchema);
export { User };
