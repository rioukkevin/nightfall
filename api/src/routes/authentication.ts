import express, { Request, Response, Router } from "express";
import { LoginDto } from "src/dto/LoginDto";

const authenticationRoutes: Router = express.Router();

authenticationRoutes.post("/login", async (req: Request, res: Response) => {
    const loginInformation: LoginDto = req.body;
});

authenticationRoutes.post("/logout", async (req: Request, res: Response) => {});

export { authenticationRoutes };
