import mongoose from 'mongoose'

const FeedbackSchema = new mongoose.Schema({
   startupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Startup"
   },

   ideaName: String,

   feedbackType: {
      type: String,
      enum: ["INTERNAL", "EXTERNAL"]
   },

   rating: {
      type: Number,
      min: 1,
      max: 5
   },

   comment: String
}, { timestamps: true });

const Feedback = mongoose.model("Feedback", FeedbackSchema);
export default Feedback
