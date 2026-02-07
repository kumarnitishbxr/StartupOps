import express from 'express';
const authRouter = express.Router();

import { Login, Logout, Register } from '../Controllers/authController.js';
import optionalMiddleware from '../middleware/optionalMiddleware.js';

authRouter.post('/login', Login);
authRouter.post('/register', Register);
authRouter.get('/logout', optionalMiddleware, Logout);

export default authRouter;
