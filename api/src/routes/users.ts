import express, { Request, Response, Router } from 'express';
import { UserModel } from '../models/User';
import { Document } from 'mongoose';

const usersRoutes: Router = express.Router();

usersRoutes.get('/{id}', async (req : Request, res: Response) => {
  const user: Document[] = await UserModel.find({ id: req.params.id })
  res.json(user)
})


export { usersRoutes }