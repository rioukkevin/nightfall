import { IUser, UserModel } from "../models/User";
import { connectToDb } from "../database/connection";

interface UserPoints {
    user: IUser;
    points: number;
}
const getRanking = async () => {
    // const ranking: UserPoints[] = [];
    // const users = await UserModel.find().exec();
    // users.forEach(async (user) => {
    //     const transactions = await TransactionModel.find({ user_id: user._id });
    //     const points = transactions.map(x => x.)
    //     ranking.push({
    //         user: user,
    //         points: transactions.map(x => x.po)
    //     })

    // });
    try {
        connectToDb();
        const result = await UserModel.aggregate([
            {
                $lookup: {
                    from: "transactions",
                    localField: "_id",
                    foreignField: "user_id",
                    as: "transactions",
                },
            },
            {
                $unwind: "$transactions",
            },
            {
                $lookup: {
                    from: "establishments",
                    localField: "_id",
                    foreignField: "establishment_id",
                    as: "establishments",
                },
            },
            {
                $lookup: {
                    from: "establishmentTypes",
                    localField: "_id",
                    foreignField: "establishment_type_id",
                    as: "establishmentTypes",
                },
            },
        ]);
        console.log(result);
    } catch (error) {
        console.log("error", error);
    }
};

getRanking().finally(() => {
    console.log("Fin");
});
