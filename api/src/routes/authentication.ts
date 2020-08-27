import * as bcrypt from "bcrypt";
import express, {Request, Response, Router} from "express";
import * as jwt from "jsonwebtoken";
import passport from "passport";
import CreateUserDto from "../dto/CreateUserDto";
import LoginDto from "../dto/LoginDto";
import {JWT_SECRET_KEY} from "../helpers/authentication.helper";
import {PASSWORD_SALT_NUMBER} from "../helpers/password.helpers";
import {IUser, UserModel} from "../models/User";

const authenticationRoutes: Router = express.Router();

/**Login into the application */
authenticationRoutes.post("/login", async (req: Request, res: Response) => {
    const loginInformation: LoginDto = req.body;
    if (!(loginInformation.email && loginInformation.password)) {
        res.status(500);
        res.json("Email or password are not correct");
    } else {
        //Authenticate with passport
        passport.authenticate(
            "local",
            { session: false },
            (err, user, info) => {
                //Authentication error
                if (err || !user) {
                    return res.status(400).json({
                        message: info.message,
                        user: null,
                    });
                }
                req.login(user, { session: false }, (err) => {
                    if (err) {
                        res.send(err);
                    }
                    try {
                        // generate a signed json web token with the contents of user object and return it in the response
                        const token = jwt.sign(user, JWT_SECRET_KEY, {
                            expiresIn: "1d",
                        });
                        return res.status(200).json({ user, token });
                    } catch (error) {
                        return res.status(500).json({
                            message:
                                "Error while generating the token. Please contact the administrator",
                            user: null,
                        });
                    }
                });
            }
        )(req, res);
    }
});

/**Method to sign up in the application */
authenticationRoutes.post("/signup", async (req: Request, res: Response) => {
    const createUserDto: CreateUserDto = req.body;
    if (!(createUserDto?.email && createUserDto?.password)) {
        res.status(500);
        res.json("Email and password are mandatories");
    } else if (createUserDto.password.length < 5) {
        res.status(500);
        res.json("Password is too short");
    } else {
        //Create user model
        const user: IUser = {
            email: createUserDto.email,
            firstname: createUserDto.firstname,
            lastname: createUserDto.lastname,
            password: await bcrypt.hash(
                createUserDto.password,
                PASSWORD_SALT_NUMBER
            ),
        };
        //Create in db
        try {
            await new UserModel({
                ...user,
            }).save({
                validateBeforeSave: true,
            });
            res.status(201);
            res.json(user);
        } catch (error) {
            res.status(500);
            res.json(`Impossible to create a new user: ${error.message}`);
        }
    }
});
export { authenticationRoutes };
