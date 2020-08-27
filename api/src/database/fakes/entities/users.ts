import faker from "faker";
import { UserModel } from '../../../models/User';

const fakeUsers = function() {

    for (let i = 0; i < 10; i++){
        const user = new UserModel({
            firstname : faker.name.firstName(),
            lastname : faker.name.lastName(),
            email : faker.internet.email(),
            password : faker.internet.password()
        })
        user.save();
    }

}

export { fakeUsers }
