import express, { Request, Response, Router } from 'express';
import { UserModel, UserType } from '../models/User';
import userService from '../services/userService';

const usersRoutes: Router = express.Router();

usersRoutes.get('/:id', async (req : Request, res: Response) => {
  const user : UserType = (await UserModel.findById( req.params.id ))!
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