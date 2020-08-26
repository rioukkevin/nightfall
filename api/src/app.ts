import bodyParser from "body-parser";
import express from "express";
import configureAuthentication from "./config/passport.config";
import { connectToDb } from "./database/connection";
import appRouter from "./routes";

//Express application
const app: express.Express = express();

//#region Configuration
/**Database connection */
connectToDb();


/**Configure authentication */
configureAuthentication();

//#endregion

//#region Middlewares
///**Allow to use req.body into route handlers */
app.use(bodyParser.json());
//#endregion

/**Application routing */
app.use(appRouter);

/**Start app */
app.listen(3000, () => console.log("Server running !"));
