import moment from "moment";
import {countPoints, UserModel} from "../models/User";
import RankingResultDto from "../dto/RankingResultDto";

/**
 * Get the ranking of the users
 * @param period Period for which get the ranking
 */
const getRanking = async (
    period: moment.unitOfTime.StartOf
): Promise<RankingResultDto> => {
    const result: RankingResultDto = {
        period: period?.toString() ?? "month",
        ranking: [],
    };

    //Get users
    const users = await UserModel.find().exec();

    //Get points
    for (let index = 0; index < users.length; index++) {
        const user = users[index];

        result.ranking.push({
            user: user,
            points: await countPoints(
                user,
                result.period as moment.unitOfTime.StartOf
            ),
        });
    }

    //Sort
    result.ranking = result.ranking
        .sort((a, b) => a.points - b.points)
        .reverse();

    return result;
};

export {getRanking};
