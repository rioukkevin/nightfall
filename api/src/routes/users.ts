import express, { Request, Response, Router } from 'express';
import { User } from '../models/User';
import { Document } from 'mongoose';

const usersRoutes: Router = express.Router();

usersRoutes.get('/{id}', async (req : Request, res: Response) => {
  const user: Document[] = await User.find({ id: req.params.id })
  res.json(user)
})

usersRoutes.post('/login', async (req : Request, res: Response) => {
  //TODO connection user
  const user = {

  };
  res.json({user});
})

usersRoutes.post('/logout', async (req : Request, res: Response) => {
  //TODO deconnection user 
  res.json({sucess : true});
})

export { usersRoutes }