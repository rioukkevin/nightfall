import moment from "moment";
import {Document, model, Model, QueryPopulateOptions, Schema} from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import {EstablishmentModel} from "./Establishment";
import {TransactionModel} from "./Transaction";
import {TypeEstablishmentModel} from "./Type_establishment";

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

const countPoints = async (
    user: UserType,
    period: moment.unitOfTime.StartOf
): Promise<number> => {
    const start = moment().startOf(period).format("YYYY-MM-DD");
    const end = moment().endOf(period).format("YYYY-MM-DD");
    const transactions: Array<any> = await TransactionModel.find({
        user: user._id,
        date: {
            $gte: new Date(start).toISOString(),
            $lt: new Date(end).toISOString(),
        },
    }).populate({
        path: "establishment",
        model: EstablishmentModel,
        populate: {
            path: "establishment_type",
            model: TypeEstablishmentModel,
        },
    } as QueryPopulateOptions);

    return transactions.reduce((points, transaction) => {
        return points + transaction.establishment.establishment_type.points;
    }, 0);
};

const UserModel: Model<UserType> = model<UserType>("users", UserSchema);
export {
    UserModel,
    IUser,
    UserType,
    countPoints,
    countPointsLastYear,
    countPointsLastMonth,
};
