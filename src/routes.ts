import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import SpotsController from './app/controllers/SpotsController';

const routes = Router();

routes.post('/signup', UserController.store);
routes.post('/signin', SessionController.store);

routes.use(authMiddleware);
routes.get('/spots', SpotsController.index);
routes.post('/spots', SpotsController.store);

export default routes;
