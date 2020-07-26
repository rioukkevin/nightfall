import { model, Schema, Document, Model } from "mongoose";

const UserSchema: Schema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const User: Model<Document> = model('users', UserSchema)

export { User }