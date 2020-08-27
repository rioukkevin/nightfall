import express, { Router } from "express";
import { usersRoutes } from "./users";
import { establishmentsRoutes } from "./establishments";
import { typesEstablishmentRoutes } from "./typeEstablishments";
import { transactionsRoutes } from "./transactions";
import { authenticationRoutes } from "./authentication";
import passport from "passport";

/**Define global router for the application */
const appRouter: Router = express.Router();

//#region With authentication routes
const withAuthenticationRouter = express.Router();
withAuthenticationRouter.use("/users", usersRoutes);

//type d'establishments
withAuthenticationRouter.use("/establishments", establishmentsRoutes);

//establishments
withAuthenticationRouter.use("/types-establishment", typesEstablishmentRoutes);

//transactions
withAuthenticationRouter.use("/transactions", transactionsRoutes);

//#endregion

//#region Without authentication routes
const withoutAuthenticationRouter = express.Router();
//Authentication
withoutAuthenticationRouter.use("/auth", authenticationRoutes);

//#endregion

appRouter.use("", withoutAuthenticationRouter);
appRouter.use(
    "",
    passport.authenticate("jwt", { session: false }),
    withAuthenticationRouter
);

export default appRouter;
