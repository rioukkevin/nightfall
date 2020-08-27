import { seed } from "./entities/type_establishments";
import { connectToDb } from "./../connection";

connectToDb();
seed();
