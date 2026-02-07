import mongoose from 'mongoose'



const startupSchema = new mongoose.Schema({
   name: { type: String, required: true },
   description: String,
   industry: String,
   stage: {
      type: String,
      enum: ["IDEA", "MVP", "EARLY_TRACTION", "SCALING"],
      default: "IDEA"
   },
   founder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
   },
   teamMembers: [
      {
         user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
         role: { type: String, default: "MEMBER" }
      }
   ]
}, { timestamps: true }
);

export default mongoose.model("Startup", startupSchema);
