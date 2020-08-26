import { IUser } from "../models/User";

export default interface UserPoints {
    user: IUser;
    points: number;
    period: string;
}
