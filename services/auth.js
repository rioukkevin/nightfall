const { User } = require("../models/user");

export const getAuthUser = () => {
    return new User({
        id: 1,
        login: 'AG49',
        firstname: 'Antoine',
        lastname: 'GUENEAU',
        avatar: 'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1'
    });
};
