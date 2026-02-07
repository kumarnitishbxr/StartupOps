import mongoose from 'mongoose'


const taskSchema = new mongoose.Schema({
   startupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Startup",
      required: true,
      index: true
   },
   title: { type: String, required: true },
   description: String,
   assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
   },
   status: {
      type: String,
      enum: ["TODO", "IN_PROGRESS", "DONE"],
      default: "TODO"
   },
   dueDate: Date
}, { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
