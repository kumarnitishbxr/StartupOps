import mongoose from 'mongoose'


const AnalyticsSchema = new mongoose.Schema({

   startupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Startup"
   },

   totalTasks: Number,
   completedTasks: Number,

   totalMilestones: Number,
   completedMilestones: Number,

   taskCompletionRate: Number,
   milestoneProgressRate: Number
}, { timestamps: true });


const Analytics = mongoose.model('Analytics', AnalyticsSchema);
export default Analytics