import { Request, Response } from 'express';
import Booking from '../models/Booking';

export default {
  async store(req: Request, res: Response) {
    const { spot_id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      spot_id,
      user_id: req.userId,
      date,
    });
    return res.json(booking);
  },
};
