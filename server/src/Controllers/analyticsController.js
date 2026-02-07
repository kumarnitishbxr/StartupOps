import {
  getStartupOverview,
  getTaskAnalytics,
  getMilestoneAnalytics,
  getFeedbackAnalytics
} from "../services/analyticsServices.js";




export const analyticsOverview = async (req, res) => {
  try {
    const { startupId } = req.params;

    const data = await getStartupOverview(startupId);

    return res.status(200).json(data);
  } catch (error) {
    console.error("Analytics Overview Error:", error);

    return res.status(500).json({
      message: "Failed to fetch analytics overview"
    });
  }
};




export const taskAnalytics = async (req, res) => {
  try {
    const { startupId } = req.params;

    const data = await getTaskAnalytics(startupId);

    return res.status(200).json(data);
  } catch (error) {
    console.error("Task Analytics Error:", error);

    return res.status(500).json({
      message: "Failed to fetch task analytics"
    });
  }
};



export const milestoneAnalytics = async (req, res) => {
  try {
    const { startupId } = req.params;

    const data = await getMilestoneAnalytics(startupId);

    return res.status(200).json(data);
  } catch (error) {
    console.error("Milestone Analytics Error:", error);

    return res.status(500).json({
      message: "Failed to fetch milestone analytics"
    });
  }
};




export const feedbackAnalytics = async (req, res) => {
  try {
    const { startupId } = req.params;

    const data = await getFeedbackAnalytics(startupId);

    return res.status(200).json(data);
  } catch (error) {
    console.error("Feedback Analytics Error:", error);

    return res.status(500).json({
      message: "Failed to fetch feedback analytics"
    });
  }
};
