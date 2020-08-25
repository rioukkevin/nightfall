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

interface IUser {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

type UserType = IUser & Document;

UserSchema.plugin(uniqueValidator);

const UserModel: Model<UserType> = model<UserType>("users", UserSchema);
export { UserModel, IUser, UserType };
