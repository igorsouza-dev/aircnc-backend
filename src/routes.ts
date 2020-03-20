import { Router } from 'express';
import UserController from './app/controllers/SessionController';

const routes = Router();

routes.get('/', (req, res) => res.send('hello world'));

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

export default routes;
