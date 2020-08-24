import mongoose from 'mongoose';
import dotenv from 'dotenv';

const connection = function() {

  dotenv.config();

  mongoose.connect(process.env.DB_CONNECTION!, {
    useUnifiedTopology: true,
    useNewUrlParser : true
  }, () => {
    console.log('Connected du DB !')
  });
}

export { connection }