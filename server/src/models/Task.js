import mongoose from 'mongoose'


const TaskSchema = new mongoose.Schema({
   startupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Startup"
   },

   milestoneId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Milestone"
   },

   title: String,
   description: String,

   assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
   },

   status: {
      type: String,
      enum: ["TODO", "PROGRESS", "DONE", "BLOCKED"]
   }

}, { timestamps: true });


const Task = mongoose.model('Task', TaskSchema)
export default Task