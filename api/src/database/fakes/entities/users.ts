import faker from "faker";
import { UserModel } from "../../../models/User";
import * as bcrypt from "bcrypt";
import { PASSWORD_SALT_NUMBER } from "../../../helpers/password.helpers";

const fakeUsers = async () => {
    const adminUser = new UserModel({
        firstname: "Victor",
        lastname: "Delarue",
        email: "v.delarue@nightfall.fr",
        password: await bcrypt.hash(
            "Not24get",
            PASSWORD_SALT_NUMBER
        ),
    });
    await adminUser.save();

    for (let i = 0; i < 10; i++) {
        const user = new UserModel({
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            email: faker.internet.email(),
            password: await bcrypt.hash(
                "Not24get",
                PASSWORD_SALT_NUMBER
            ),
        });
        await user.save();
    }
};

export { fakeUsers };
