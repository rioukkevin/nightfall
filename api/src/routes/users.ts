import express, { Request, Response, Router } from 'express';
import { User } from '../models/User';
import { Document } from 'mongoose';
import userService from '../services/userService';

const usersRoutes: Router = express.Router();

usersRoutes.get('/:id', async (req : Request, res: Response) => {
  const users: Document[] = await User.find({ _id: req.params.id })
  const user: any = users[0];
  const service = new userService(user)
  res.json({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    countPointsLastYear: await service.countPointsLastYear(),
    countPointsLastMonth: await service.countPointsLastMonth(),
  })
})

usersRoutes.post('/login', async (req : Request, res: Response) => {
  //TODO connection user
  res.json({});
})

usersRoutes.post('/logout', async (req : Request, res: Response) => {
  //TODO deconnection user 
  res.json({sucess : true});
})

export { usersRoutes }