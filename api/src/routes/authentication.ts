import express, { Request, Response, Router } from "express";
import LoginDto from "../dto/LoginDto";
import CreateUserDto from "../dto/CreateUserDto";
import { User } from "../models/User";
import * as bcrypt from "bcrypt";
import { PASSWORD_SALT_NUMBER } from "../helpers/passwordHelpers";

const authenticationRoutes: Router = express.Router();

authenticationRoutes.post("/login", async (req: Request, res: Response) => {
    const loginInformation: LoginDto = req.body;
    if (!(loginInformation.email && loginInformation.password)) {
        res.status(500);
        res.json("Email or password are not correct");
    } else {
        //TODO
    }
});

authenticationRoutes.post("/logout", async (req: Request, res: Response) => {});

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
        const user: User = {
            ...createUserDto,
            password: await bcrypt.hash(
                createUserDto.password,
                PASSWORD_SALT_NUMBER
            ),
        };
        //Create in db
        try {
            await new User({
                ...user,
            }).save({
                validateBeforeSave: true,
                validateModifiedOnly: true,
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
