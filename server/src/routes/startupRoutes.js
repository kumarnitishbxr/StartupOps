import express from 'express';
import { addStartup, getAllStartups, getStartupById, updateStartupById, deleteStartup } from '../Controllers/startupController.js';
import founderMiddleware from '../middleware/founderMiddleware.js';
import optionalMiddleware from '../middleware/optionalMiddleware.js';

const startupRouter = express.Router();


startupRouter.post('/', founderMiddleware, addStartup);
startupRouter.get('/', optionalMiddleware, getAllStartups);
startupRouter.get('/:startupId', optionalMiddleware, getStartupById);
startupRouter.patch('/:startupId', founderMiddleware, updateStartupById);
startupRouter.delete('/:startupId', founderMiddleware, deleteStartup);


export default startupRouter;
