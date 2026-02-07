import Task from "../models/Task.js";



export const createTask = async (req, res) => {

   try {
      const { startupId } = req.params;
      if(!startupId)
         return res.status(404).json({message:"StartupId required"})

      const task = await Task.create({
         ...req.body,
         startupId
      });

      res.status(201).json(task);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};



export const getTasks = async (req, res) => {
   try {
      const { startupId } = req.params;

      const tasks = await Task.find({ startupId }).populate("assignedTo", "name email").populate("milestoneId", "title");

      res.status(200).json(tasks);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};



export const getTaskById = async (req, res) => {

   try {
      const task = await Task.findById(req.params.taskId).populate("assignedTo", "name email");
      if (!task) {
         return res.status(404).json({ message: "Task not found" });
      }

      res.status(200).json(task);  
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};



export const updateTask = async (req, res) => {

   try {
      const {taskId} = req.params
      if(!taskId)
         return res.status(200).json({message: "Missing task ID"})

      const task = await Task.findByIdAndUpdate(taskId,req.body,{ new: true });
      if (!task) {
         return res.status(404).json({ message: "Task not found" });
      }

      res.json(task);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};



export const updateTaskStatus = async (req, res) => {

   try {
      const { status } = req.body;
      const taskId = req.params.taskId;
      if(!taskId)
         return res.status(404).json({message:"TaskId required"})

      const task = await Task.findByIdAndUpdate(req.params.taskId,{ status },{ new: true });
      if (!task) {
         return res.status(404).json({ message: "Task not found" });
      }

      res.json(task);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};




export const deleteTask = async (req, res) => {
 
   try {
      const {taskId} = req.params
      if(!taskId)
         return res.status(200).json({message: "Missing task ID"})

      const task = await Task.findByIdAndDelete(req.params.taskId);
      if (!task) {
         return res.status(404).json({ message: "Task not found" });
      }

      res.json({ message: "Task deleted successfully" });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};
