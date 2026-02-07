import express from 'express';
const authRouter = express.Router();

import { Login, Logout, Register, checkUser } from '../Controllers/authController.js';
import optionalMiddleware from '../middleware/optionalMiddleware.js';

authRouter.post('/login', Login);
authRouter.post('/register', Register);
authRouter.get('/logout', optionalMiddleware, Logout);
authRouter.get('/check', optionalMiddleware, checkUser);

export default authRouter;
