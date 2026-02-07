import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRouter from './routes/AuthRoutes.js';
import main from './config/db.js';
import redisClient from './config/redis.js';
import startupRouter from './routes/startupRoutes.js';
import memberRouter from './routes/memberRoutes.js';
import taskRouter from './routes/taskRoutes.js';
import milestoneRouter from './routes/milestoneRoutes.js';

const app = express();


app.use(cors({
   origin: 'http://localhost:5173',
   credentials: true
}))


app.use(express.json());
app.use(cookieParser());



app.use('/api/auth', authRouter);
app.use('/api/startup', startupRouter);
app.use('/api/member', memberRouter)
app.use('/api/tasks', taskRouter);
app.use('/api/milestone', milestoneRouter)


const StartServer = async ()=>{

   try {

      await Promise.allSettled([main(), redisClient.connect()])
      console.log('DB connected successfully.')

      app.listen(process.env.PORT, ()=>{
         console.log('Listening at PORT', process.env.PORT)
      })
      
   } catch (error) {
      console.log(error.message);
      process.exit(1);
   }
}


StartServer()