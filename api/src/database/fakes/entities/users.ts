import faker from "faker";
import { User } from '../../../models/User';

for (let i = 0; i < 10; i++){
    const user = new User({
        firstname : faker.name.firstName(),
        lastname : faker.name.lastName(),
        email : faker.internet.email(),
        password : faker.internet.password()
    })
    user.save();
}