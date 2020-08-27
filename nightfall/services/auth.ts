import User from "../models/User";
import fetchRequest from "../models/FetchRequest";

/**
 * Get authenticate user
 */
export const getAuthUser = async (): Promise<User> => {
    return (await fetchRequest({path: "/users/5f477535376d3c05eb9187f6", method: "GET"})) as User
};
