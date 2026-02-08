import express from "express";

import {
  createFeedback,
  getFeedback,
  getFeedbackById,
  deleteFeedback
} from "../Controllers/feedbackController.js";

const feedbackRouter = express.Router();



feedbackRouter.post("/:startupId/feedback",createFeedback);
feedbackRouter.get("/:startupId/feedback", getFeedback );
feedbackRouter.get("/:feedbackId", getFeedbackById);
feedbackRouter.delete("/:feedbackId", deleteFeedback);

export default feedbackRouter;
