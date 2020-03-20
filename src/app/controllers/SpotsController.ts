import { Request, Response } from 'express';
import Spot from '../models/Spot';

export default {
  async index(req: Request, res: Response) {
    const spots = await Spot.findAll();
    return res.json(spots);
  },
  async store(req: Request, res: Response) {
    const { filename } = req.file;
    const { company, price, techs } = req.body;
    const spot = await Spot.create({
      thumbnail: filename,
      company,
      price,
      techs,
      user_id: req.userId,
    });
    return res.json(spot);
  },
};
