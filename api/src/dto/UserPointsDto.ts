import {IUser} from "../models/User";

export default interface UserPointsDto {
    user: IUser;
    points: number;
}
