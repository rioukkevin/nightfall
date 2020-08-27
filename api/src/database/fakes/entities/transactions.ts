import {
    EstablishmentModel,
    EstablishmentType,
} from "../../../models/Establishment";
import { TransactionModel } from "../../../models/Transaction";
import { UserModel, UserType } from "../../../models/User";

const fakeTransactions = async function () {
    //Get establishments
    const establishments: Array<EstablishmentType> = await EstablishmentModel.find().exec();

    //Get users
    const users: Array<UserType> = await UserModel.find().exec();

    for (let i = 0; i < 25; i++) {
        const index_establishment_ramdom = Math.round(
            Math.random() * (establishments.length - 1)
        );
        const index_user_ramdom = Math.round(
            Math.random() * (users.length - 1)
        );
        const transaction = new TransactionModel({
            establishment: establishments[index_establishment_ramdom]._id,
            user: users[index_user_ramdom]._id,
            date: Date.now(),
        });
        console.log("Transaction à ajouter", transaction);
        transaction.save();
    }
};

export { fakeTransactions };
