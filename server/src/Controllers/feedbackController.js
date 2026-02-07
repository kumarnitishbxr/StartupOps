// controllers/feedback.controller.js
import Feedback from "../models/Feedback.js";



export const createFeedback = async (req, res) => {
   try {
      const { startupId } = req.params;

      const feedback = await Feedback.create({
         ...req.body,
         startupId,
         givenBy: req.user?.id || null
      });

      return res.status(201).json(feedback);
   } catch (error) {
      console.error("Create Feedback Error:", error);
      return res.status(500).json({
         message: "Failed to submit feedback"
      });
   }
};



export const getFeedback = async (req, res) => {
   try {
      const { startupId } = req.params;

      const feedback = await Feedback.find({ startupId })
         .populate("givenBy", "name email")
         .sort({ createdAt: -1 });

      return res.status(200).json(feedback);
   } catch (error) {
      console.error("Get Feedback Error:", error);
      return res.status(500).json({
         message: "Failed to fetch feedback"
      });
   }
};




export const getFeedbackById = async (req, res) => {
   try {
      const feedback = await Feedback.findById(req.params.feedbackId)
         .populate("givenBy", "name email");

      if (!feedback) {
         return res.status(404).json({ message: "Feedback not found" });
      }

      return res.status(200).json(feedback);
   } catch (error) {
      console.error("Get Feedback By ID Error:", error);
      return res.status(500).json({
         message: "Failed to fetch feedback"
      });
   }
};




export const deleteFeedback = async (req, res) => {
   try {
      const { feedbackId } = req.params;

      const feedback = await Feedback.findByIdAndDelete(feedbackId);

      if (!feedback) {
         return res.status(404).json({ message: "Feedback not found" });
      }

      return res.status(200).json({
         message: "Feedback deleted successfully"
      });
   } catch (error) {
      console.error("Delete Feedback Error:", error);
      return res.status(500).json({
         message: "Failed to delete feedback"
      });
   }
};
