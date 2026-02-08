import Feedback from "../models/Feedback.js";
import Milestone from "../models/Milestone.js";
import Task from "../models/Task.js";

export const getStartupOverview = async (startupId) => {
   const [
      totalTasks,
      completedTasks,
      totalMilestones,
      completedMilestones,
      feedbackCount
   ] = await Promise.all([
      Task.countDocuments({ startupId }),
      Task.countDocuments({ startupId, status: "DONE" }),
      Milestone.countDocuments({ startupId }),
      Milestone.countDocuments({ startupId, status: "COMPLETED" }),
      Feedback.countDocuments({ startupId })
   ]);

   return {
      totalTasks,
      completedTasks,
      taskCompletionRate:
         totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100),

      totalMilestones,
      completedMilestones,
      milestoneCompletionRate:
         totalMilestones === 0
            ? 0
            : Math.round((completedMilestones / totalMilestones) * 100),

      feedbackCount
   };
};

export const getTaskAnalytics = async (startupId) => {
   return Task.aggregate([
      { $match: { startupId } },
      {
         $group: {
            _id: "$status",
            count: { $sum: 1 }
         }
      }
   ]);
};

export const getMilestoneAnalytics = async (startupId) => {
   return Milestone.aggregate([
      { $match: { startupId } },
      {
         $group: {
            _id: "$status",
            count: { $sum: 1 }
         }
      }
   ]);
};

export const getFeedbackAnalytics = async (startupId) => {
   return Feedback.aggregate([
      { $match: { startupId } },
      {
         $group: {
            _id: "$rating",
            count: { $sum: 1 }
         }
      }
   ]);
};
