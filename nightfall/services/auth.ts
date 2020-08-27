import User from "../models/User";
import fetchRequest from "../models/FetchRequest";

/**
 * Get authenticate user
 */
export const getAuthUser = async (): Promise<User> => {
    return (await fetchRequest({path: "/users/5f477535376d3c05eb9187f6", method: "GET"})) as User
};

/**
 * Loggin user
 */
export const loginUser = async (_email: string, _password: string): Promise<User> => {
    return (await fetchRequest({path: "/auth/login", method: "POST", body: {
        "email" : _email,
        "password" : _password
    }})) as User
};


