// models/Milestone.js
import mongoose from "mongoose";

const MilestoneSchema = new mongoose.Schema({
   startupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Startup",
      required: true,
      index: true
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

   status: {
      type: String,
      enum: ["PLANNED", "IN_PROGRESS", "COMPLETED"],
      default: "PLANNED",
      index: true
   },

   startDate: Date,
   endDate: Date
}, { timestamps: true }
);

MilestoneSchema.index({ startupId: 1, status: 1 });

const Milestone = mongoose.model("Milestone", MilestoneSchema);
export default Milestone
