import mongoose from "mongoose";



const StartupMemberSchema = new mongoose.Schema({

   startupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Startup",
      required: true,
      index: true
   },

   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
   },

   role: {
      type: String,
      enum: ["FOUNDER", "ADMIN", "MEMBER"],
      default: "MEMBER"
   },

   permissions: {
      type: [String],
      default: []
   }
}, { timestamps: true }
);

StartupMemberSchema.index({ startupId: 1, userId: 1 }, { unique: true });

const StartupMember = mongoose.model("StartupMember", StartupMemberSchema);
export default StartupMember
