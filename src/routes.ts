import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import SpotsController from './app/controllers/SpotsController';
import DashboardController from './app/controllers/DashboardController';
import BookingController from './app/controllers/BookingController';

const routes = Router();
const upload = multer(multerConfig);

routes.post('/signup', UserController.store);
routes.post('/signin', SessionController.store);

routes.use(authMiddleware);
routes.get('/spots', SpotsController.index);
routes.post('/spots', upload.single('thumbnail'), SpotsController.store);

routes.get('/dashboard', DashboardController.index);

routes.post('/spots/:spot_id/bookings', BookingController.store);

export default routes;
