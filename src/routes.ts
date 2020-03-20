import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

const routes = Router();

routes.post('/signup', UserController.store);
routes.post('/signin', SessionController.store);

export default routes;
