import mongoose from "mongoose";
import dotenv from "dotenv";

const connection = function () {
    dotenv.config();

    mongoose.connect(
        process.env.DB_CONNECTION!,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        },
        (error) => {
            console.log(
                `Error while trying to connect to the mongo database : ${error.message}`
            );
        }
    );
};

export { connection };
