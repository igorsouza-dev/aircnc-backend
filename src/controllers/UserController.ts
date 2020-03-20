import { Request, Response } from 'express';

export default {
  async index(req: Request, res: Response) {
    return res.json({ method: 'index' });
  },

  async create(req: Request, res: Response) {
    return res.json({ method: 'create' });
  },

  async update(req: Request, res: Response) {
    return res.json({ method: 'update', id: req.params.id });
  },

  async delete(req: Request, res: Response) {
    return res.json({ method: 'delete', id: req.params.id });
  },
};
