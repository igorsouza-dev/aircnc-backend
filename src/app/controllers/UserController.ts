import { Request, Response } from 'express';
import User from '../models/User';

export default {
  async store(req: Request, res: Response) {
    const emailExists = await User.findOne({
      where: { email: req.body.email },
    });
    if (emailExists) {
      return res.status(401).json({ error: 'E-mail is already taken!' });
    }
    const user = await User.create(req.body);
    return res.json(user);
  },
};
