export class User {

    id;
    login;
    firstname;
    lastname;
    avatar;

    constructor({ id = null, login = null, firstname = null, lastname = null, avatar = null }) {
        this.id = id;
        this.login = login;
        this.firstname = firstname;
        this.lastname = lastname;
        this.avatar = avatar;
    }

    get countPointsLastYear() {
        return 8460;
    }

    get countPointsLastMonth() {
        return 720;
    }

}
