import express from 'express'
import { createTask, getTasks, getTaskById, updateTask, updateTaskStatus, deleteTask} from "../Controllers/taskController.js";
import founderMiddleware from "../middleware/FounderMiddleware.js";

const taskRouter = express.Router();


taskRouter.post("/startups/:startupId/tasks", founderMiddleware, createTask);
taskRouter.get("/startups/:startupId/tasks", founderMiddleware, getTasks);
taskRouter.get("/tasks/:taskId",founderMiddleware, getTaskById);
taskRouter.put("/:taskId",founderMiddleware, updateTask);
taskRouter.patch("/:taskId/status", founderMiddleware, updateTaskStatus);
taskRouter.delete("/:taskId", founderMiddleware, deleteTask);



export default taskRouter;
