import User from "../models/User";
import fetchRequest from "../models/FetchRequest";

/**
 * Get authenticate user
 */
export const getAuthUser = async (): Promise<User> => {
    return (await fetchRequest({path: "/users/5f44fe6f575b685ae5ce83ee", method: "GET"})) as User
};
