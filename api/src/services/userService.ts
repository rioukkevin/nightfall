import { Transaction } from "../models/Transaction";
import { UserType } from "../models/User";

export default class userService {

  user: UserType;

  constructor(user: UserType) {
    this.user = user;
  }

  async countPointsLastYear(){
    //TODO dynamiser les dates
    return this.countPoints( new Date("2020-01-01"), new Date("2020-12-31"));
  }

  async countPointsLastMonth() {
    //TODO dynamiser les dates
    return this.countPoints( new Date("2020-08-01"), new Date("2020-08-31"));
  }

  async countPoints (date_begin : Date, date_end : Date) {
    const transactions : Array<any> = (await Transaction.find({
      user_id: this.user._id,
      date: { $gte: date_begin, $lt: date_end }
    }).populate({
      path : 'establishment',
      populate : {
        path : 'establishment_type'
      }
    }));

    return transactions.reduce( (points, transaction) => {
      return points + transaction.establishment.establishment_type.points
    }, 0);

  }
  
}