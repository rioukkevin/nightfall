import { IUser, UserModel } from "../models/User";

interface UserPoints {
    user: IUser;
    points: number;
}
export const getRanking = async () => {
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
    const result = UserModel.aggregate([
        {
            $lookup: {
                from: "transactions",
                localField: "_id",
                foreignField: "user_id",
                as: "transactions",
            },
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
    ])
        .exec()
        .then((users: any[]) => {
            console.log(users);
        });
};
