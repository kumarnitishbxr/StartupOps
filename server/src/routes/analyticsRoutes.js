import express from "express";
import {
  analyticsOverview,
  feedbackAnalytics,
  milestoneAnalytics,
  taskAnalytics
} from "../Controllers/analyticsController.js";

import founderMiddleware from "../middleware/founderMiddleware.js";

const analyticsRouter = express.Router();


analyticsRouter.get("/:startupId/overview", founderMiddleware, analyticsOverview);
analyticsRouter.get("/:startupId/tasks",founderMiddleware, taskAnalytics);
analyticsRouter.get("/:startupId/milestones", founderMiddleware, milestoneAnalytics);
analyticsRouter.get("/:startupId/feedback", founderMiddleware, feedbackAnalytics);


export default analyticsRouter;
