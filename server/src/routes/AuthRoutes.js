import express from 'express'
const authRouter = express.Router();

import { Register, Login, Logout } from '../Controllers/authController.js';
import authMiddleware from '../middleware/authmiddleware.js';



authRouter.post('/login', Login);
authRouter.post('/register', Register);
authRouter.get('/logout', authMiddleware,Logout);

export default authRouter