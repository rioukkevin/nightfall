import express, { Request, Response, Router } from 'express';
import { User } from '../models/User';
import { Document } from 'mongoose';

const usersRoutes: Router = express.Router();

usersRoutes.get('/', async (req : Request, res: Response) => {
  try{
    const users: Document[] = await User.find()
    res.json(users)
  }catch(err){
    res.json({message : err})
  }
})

export { usersRoutes }