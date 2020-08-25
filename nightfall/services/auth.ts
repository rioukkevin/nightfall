import User from "../models/User";
import Constants from 'expo-constants';

/**
 * Get authenticate user
 */
export const getAuthUser = async (): Promise<User> => {

    var myHeaders = new Headers();

    var myInit: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        cache: 'default'
    };

    var myRequest = new Request(Constants.manifest.extra.BASE_URL + "/employees", myInit);

    console.log("myRequest");
    console.log(myRequest);

    // fetch(myRequest/* , myInit */)
    fetch("192.168.1.31:3000/employees"/* , myInit */)
        .then((response) => {
            console.log("response")
            console.log(response)
        }
        );

    return {
        id: 1,
        login: "AG49",
        firstname: "Antoine",
        lastname: "GUENEAU",
        avatar:
            "https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1",
        countPointsLastMonth: 460,
        countPointsLastYear: 685,
    } as User;
};
