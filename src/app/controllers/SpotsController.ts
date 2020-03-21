import { Request, Response } from 'express';
import { Op } from 'sequelize';
import Spot from '../models/Spot';

export default {
  async index(req: Request, res: Response) {
    const { tech } = req.query;
    let where = {};

    if (tech) {
      where = {
        where: {
          techs: {
            [Op.like]: `%${req.query.tech}%`,
          },
        },
      };
    }
    const spots = await Spot.findAll(where);
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
