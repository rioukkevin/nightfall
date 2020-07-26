import express from 'express';
import mongoose from 'mongoose';
const app = express();
require('dotenv/config');

//Routes
const usersRoute = require('./routes/users')
app.use('/users', usersRoute)

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const db_connection : string = process.env.DB_CONNECTION || '';

mongoose.connect(db_connection, { useUnifiedTopology: true , useNewUrlParser : true} ,() => {
  console.log('Connected du DB !')
})

app.listen(3000, () => console.log('Server running !'));