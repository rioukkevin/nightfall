import express from 'express';
import bodyParser from 'body-parser';
import {usersRoutes} from './routes/users';
import {establishmentsRoutes} from './routes/establishments';
import {transactionsRoutes} from './routes/transactions';
import {typesEstablishmentRoutes} from './routes/typeEstablishments';
import { connection } from './database/connection';

connection()

const app: express.Express = express();

//Routes users
app.use('/users', usersRoutes)

//Routes type d'establishments
app.use('/establishments', establishmentsRoutes)

//Routes establishments
app.use('/types-establishment', typesEstablishmentRoutes)

//Routes transactions
app.use('/transactions', transactionsRoutes)

//Init body-parser
app.use(bodyParser.json())

app.listen(3000, () => console.log('Server running !'));