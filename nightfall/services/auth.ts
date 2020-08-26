import User from "../models/User";
import fetchRequest from "../models/FetchRequest";

/**
 * Get authenticate user
 */
export const getAuthUser = async (): Promise<User> => {

    let result = await fetchRequest({path: "/establishments", method: "GET"})
    
    console.log("result");
    console.log(result);

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
