import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
      startupId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Startup",
         required: true,
         index: true
      },

      ideaTag: {
         type: String,
         trim: true
      },

      feedbackType: {
         type: String,
         enum: ["INTERNAL", "EXTERNAL"],
         required: true,
         index: true
      },

      givenBy: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },

      rating: {
         type: Number,
         min: 1,
         max: 5
      },

      comment: {
         type: String,
         trim: true
      }
   },{ timestamps: true }
);

FeedbackSchema.index({ startupId: 1, feedbackType: 1 });

export default mongoose.model("Feedback", FeedbackSchema);
