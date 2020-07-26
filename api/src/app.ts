import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import {usersRoutes} from './routes/users';
import dotenv from 'dotenv';

dotenv.config();

const app: express.Express = express();

//Routes
app.use('/users', usersRoutes)

//Init body-parser
app.use(bodyParser.json())

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION!, {
  useUnifiedTopology: true,
  useNewUrlParser : true
}, () => {
  console.log('Connected du DB !')
});

app.listen(3000, () => console.log('Server running !'));