import mongoose from 'mongoose'



const StartupSchema = new mongoose.Schema({

   name: { type: String, required: true },

   description: String,

   industry: String,

   stage: {
      type: String,
      enum: ["IDEA", "MVP", "GROWTH", "SCALING"]
   },

   founder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
   },

   workspaceSettings: {
      isEditable: { type: Boolean, default: true },
      allowExternalFeedback: { type: Boolean, default: false }
   }
}, { timestamps: true });

const Startup = mongoose.model("Startup", StartupSchema);
export default Startup