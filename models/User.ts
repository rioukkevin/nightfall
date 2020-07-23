export default interface User {
    /**
     * Identifier
     */
    id: number;
    /**
     * Login
     */
    login: string;
    /**
     * First name
     */
    firstname?: string;
    /**
     * Last name
     */
    lastname?: string;
    /**
     * Avatar
     */
    avatar?: string;
    /**
     * Points of the last month
     */
    countPointsLastMonth?: number;

    /**
     * Points of the last month
     */
    countPointsLastYear?: number;
}
