import { Request, Response } from 'express';
import User from '../models/User';

export default {
  async index(req: Request, res: Response) {
    return res.json({ method: 'index' });
  },

  async show(req: Request, res: Response) {
    return res.json({ method: 'show' });
  },

  async store(req: Request, res: Response) {
    const user = await User.create(req.body);
    return res.json(user);
  },

  async update(req: Request, res: Response) {
    return res.json({ method: 'update', id: req.params.id });
  },

  async destroy(req: Request, res: Response) {
    return res.json({ method: 'delete', id: req.params.id });
  },
};
