import express, { Request, Response } from 'express';
const router = express.Router();
const User = require('../models/User')

router.get('/', async (req : Request, res: Response) => {
  try{
    const users = await User.find()
    res.json(users)
  }catch(err){
    res.json({message : err})
  }
})

module.exports = router;