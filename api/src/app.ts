import express from 'express';
import bodyParser from 'body-parser';
import {usersRoutes} from './routes/users';
import { connection } from './database/connection';

connection()

const app: express.Express = express();

//Routes
app.use('/users', usersRoutes)

//Init body-parser
app.use(bodyParser.json())

app.listen(3000, () => console.log('Server running !'));