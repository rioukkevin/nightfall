import express, {Request, Response, Router} from "express";
import moment from "moment";
import {countPointsLastMonth, countPointsLastYear, UserModel, UserType} from "../models/User";
import {getRanking} from "../services/user.service";

const usersRoutes: Router = express.Router();

/**Get the ranking */
usersRoutes.get("/ranking", async (req: Request, res: Response) => {
    const period = req.query.period as moment.unitOfTime.StartOf;
    console.log(`Asked period is ${period}`);
    if (!period) {
        res.statusCode = 400;
        res.json(
            "Query parameter period is required but not provided in the request."
        );
    } else {
        res.statusCode = 200;
        res.json(await getRanking(period));
    }
});

usersRoutes.get("/:id", async (req: Request, res: Response) => {
    const user: UserType = (await UserModel.findById(req.params.id))!;
    res.json({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        countPointsLastYear: await countPointsLastYear(user),
        countPointsLastMonth: await countPointsLastMonth(user),
    });
});

export {usersRoutes};
