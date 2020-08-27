import { seed } from "./entities/type_establishments";
import { connectToDb } from "../connection";

connectToDb();
seed().finally(() => {
    console.log("All seeds have been added");
    process.exit();
});
