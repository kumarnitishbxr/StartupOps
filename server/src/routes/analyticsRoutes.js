import express from "express";
import {
  analyticsOverview,
  taskAnalytics,
  milestoneAnalytics,
  feedbackAnalytics
} from "../Controllers/analyticsController.js";

import founderMiddleware from "../middleware/founderMiddleware.js";

const analyticsRouter = express.Router();


analyticsRouter.get("/startups/:startupId/analytics/overview", founderMiddleware, analyticsOverview);
analyticsRouter.get("/startups/:startupId/analytics/tasks",founderMiddleware, taskAnalytics);
analyticsRouter.get("/startups/:startupId/analytics/milestones", founderMiddleware, milestoneAnalytics);
analyticsRouter.get("/startups/:startupId/analytics/feedback", founderMiddleware, feedbackAnalytics);

export default analyticsRouter;
