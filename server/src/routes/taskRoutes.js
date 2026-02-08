import express from 'express'
import { createTask, getTasks, getTaskById, updateTask, updateTaskStatus, deleteTask} from "../Controllers/taskController.js";
import founderMiddleware from "../middleware/founderMiddleware.js";

const taskRouter = express.Router();


taskRouter.post("/:startupId/tasks", founderMiddleware, createTask);
taskRouter.get("/:startupId/tasks", founderMiddleware, getTasks);
taskRouter.get("/:taskId",founderMiddleware, getTaskById);
taskRouter.put("/:taskId",founderMiddleware, updateTask);
taskRouter.patch("/:taskId/status", founderMiddleware, updateTaskStatus);
taskRouter.delete("/:taskId", founderMiddleware, deleteTask);



export default taskRouter;
