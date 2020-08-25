import express from "express";
import bodyParser from "body-parser";
import { usersRoutes } from "./routes/users";
import { establishmentsRoutes } from "./routes/establishments";
import { transactionsRoutes } from "./routes/transactions";
import { typesEstablishmentRoutes } from "./routes/typeEstablishments";
import { connection as connectToDb } from "./database/connection";
import { authenticationRoutes } from "./routes/authentication";

//Connect to the database
connectToDb();

//Express application
const app: express.Express = express();

//#region Middlewares
//Init body-parser
app.use(bodyParser.json());
//#endregion

//#region Routes
//users
app.use("/users", usersRoutes);

//type d'establishments
app.use("/establishments", establishmentsRoutes);

//establishments
app.use("/types-establishment", typesEstablishmentRoutes);

//transactions
app.use("/transactions", transactionsRoutes);

//Authentication
app.use("/auth", authenticationRoutes);
//#endregion

app.listen(3000, () => console.log("Server running !"));
