import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { UserModel } from "../models/User";
import * as bcrypt from "bcrypt";
import * as passportJWT from "passport-jwt";
import { JWT_SECRET_KEY } from "../helpers/authentication.helper";

const authError = "Email and/or password are incorrects";

/**
 * Configure the authentication
 */
const configureAuthentication = async () => {
    /**Authentication strategy */
    const configureLogin = async () => {
        passport.use(
            new LocalStrategy(
                {
                    passwordField: "password",
                    usernameField: "email",
                },
                async (email, password, callback) => {
                    //Search user with the password
                    const user = await UserModel.findOne({ email }).exec();
                    //CHeck if the user exists and if the password is correct
                    if (
                        !user ||
                        !(await bcrypt.compare(password, user.password))
                    ) {
                        return callback(null, null, { message: authError });
                    } else {
                        return callback(null, user.toJSON(), {
                            message: "Successfully logged in",
                        });
                    }
                }
            )
        );
    };

    /**Authentication check strategy */
    const configureTokenCheck = async () => {
        passport.use(
            new passportJWT.Strategy(
                {
                    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
                    secretOrKey: JWT_SECRET_KEY,
                },
                async (jwtPayload, cb) => {
                    //Check if the user exists
                    try {
                        const user = await UserModel.findOne({
                            email: jwtPayload.email,
                        });
                        return cb(null, user);
                    } catch (error) {
                        return cb(error);
                    }
                }
            )
        );
    };

    await configureLogin();
    await configureTokenCheck();
};

export default configureAuthentication;
