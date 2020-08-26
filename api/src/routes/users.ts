import express, { Request, Response, Router } from 'express';
import { UserModel, UserType, countPointsLastYear, countPointsLastMonth } from '../models/User';

const usersRoutes: Router = express.Router();

usersRoutes.get('/:id', async (req : Request, res: Response) => {
  const user : UserType = (await UserModel.findById( req.params.id ))!
  res.json({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    countPointsLastYear: await countPointsLastYear( user ),
    countPointsLastMonth: await countPointsLastMonth( user ),
  })
})

export { usersRoutes }