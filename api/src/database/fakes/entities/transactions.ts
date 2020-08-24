import { Transaction } from '../../../models/Transaction';

for (let i = 0; i < 25; i++){
    const transaction = new Transaction({
        establishment_id : 1,
        user_id : 1,
        date : Date.now()
    })
    transaction.save();
}