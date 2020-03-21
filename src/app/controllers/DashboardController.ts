import { Request, Response } from 'express';
import Spot from '../models/Spot';

export default {
  async index(req: Request, res: Response) {
    const spots = await Spot.findAll({
      where: {
        user_id: req.userId,
      },
    });
    return res.json(spots);
  },
};
