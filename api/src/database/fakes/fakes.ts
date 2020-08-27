import { fakeEstablishments } from "./entities/establishments";
import { fakeUsers } from "./entities/users";
import { fakeTransactions } from "./entities/transactions";
import { connectToDb } from "./../connection";

/**Connect to the DB and create mocks */
connectToDb();

fakeEstablishments()
    .then(() => {
        fakeUsers()
            .then(() => {
                fakeTransactions().finally(() =>
                    console.log("Transactions added")
                );
            })
            .finally(() => console.log("Users added"));
    })
    .finally(() => {
        console.log("Establishments added. \nFinished");
    });
