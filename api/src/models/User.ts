import { Document, model, Model, Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import { TransactionModel } from "./Transaction";
import moment from "moment";

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

const countPointsLastYear = function (user: UserType) {
    return countPoints(user, "year");
};

const countPointsLastMonth = function (user: UserType) {
    return countPoints(user, "month");
};

const countPoints = async function (
    user: UserType,
    period: moment.unitOfTime.StartOf
) {
    const start = moment().startOf(period).format("YYYY-MM-DD");
    const end = moment().endOf(period).format("YYYY-MM-DD");
    const transactions: Array<any> = await TransactionModel.find({
        user_id: user._id,
        date: {
            $gte: new Date(start).toISOString(),
            $lt: new Date(end).toISOString(),
        },
    }).populate({
        path: "establishment",
        populate: {
            path: "establishment_type",
        },
    });
    return transactions.reduce((points, transaction) => {
        return points + transaction.establishment.establishment_type.points;
    }, 0);
};

const UserModel: Model<UserType> = model<UserType>("users", UserSchema);
export {
    UserModel,
    IUser,
    UserType,
    countPointsLastYear,
    countPointsLastMonth,
};
