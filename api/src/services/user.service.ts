import moment from "moment";
import { connectToDb } from "../database/connection";
import UserPoints from "../dto/UserPoints";
import { countPoints, UserModel } from "../models/User";

const getRanking = async (
    period: moment.unitOfTime.StartOf
): Promise<UserPoints[]> => {
    
    const result: UserPoints[] = [];
    if (period) {
        console.log("Je démarre");

        //Get users
        const users = await UserModel.find().exec();

        console.log(`J'ai récupéré ${users.length} utilisateurs`);

        //Get points
        for (let index = 0; index < users.length; index++) {
            const user = users[index];

            console.log(
                `Je calcul les points de ${user.lastname} ${user.firstname}`
            );
            result.push({
                user: user,
                points: await countPoints(user, period),
                period: period?.toLowerCase() ?? "",
            });
        }
    }

    console.log("Je termine");
    return result;
};
connectToDb();
getRanking("month").finally(() => {
    console.log("Fin");
});
