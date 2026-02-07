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

   title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      trim: true
    },

   assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
   },

   status: {
      type: String,
      enum: ["TODO", "PROGRESS", "DONE", "BLOCKED"]
   },

   dueDate: Date

}, { timestamps: true });

TaskSchema.index({ startupId: 1, milestoneId: 1 });

const Task = mongoose.model('Task', TaskSchema)
export default Task