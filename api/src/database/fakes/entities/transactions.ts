import { TransactionModel } from '../../../models/Transaction';
import { UserModel } from '../../../models/User';

const fakeTransactions = async function() {

  const establishments : Array<any> = await TransactionModel.find().exec();
  const establishments_ids : Array<String> = establishments.map( establishment => establishment._id)

  const users : Array<any> = await UserModel.find().exec();
  const users_ids : Array<String> = users.map( user => user._id)

  for (let i = 0; i < 25; i++){
    const index_establishment_ramdom = Math.round(Math.random()*(establishments_ids.length));
    const index_user_ramdom = Math.round(Math.random()*(users_ids.length))
    const transaction = new TransactionModel({
      establishment_id : establishments_ids[index_establishment_ramdom],
      user_id : users_ids[index_user_ramdom],
      date : Date.now(),
      establishment : establishments[index_establishment_ramdom]
    })
    transaction.save();
  }

}

export { fakeTransactions }