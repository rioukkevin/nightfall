import express, { Request, Response, Router } from 'express';
import { UserModel } from '../models/User';
import { Document } from 'mongoose';
import userService from '../services/userService';

const usersRoutes: Router = express.Router();

usersRoutes.get('/:id', async (req : Request, res: Response) => {
  const users: Document[] = await UserModel.find({ _id: req.params.id })
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

export { usersRoutes }