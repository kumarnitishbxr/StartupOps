const milestoneSchema = new mongoose.Schema({
   startupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Startup",
      required: true
   },
   title: { type: String, required: true },
   description: String,
   targetDate: Date,
   isCompleted: { type: Boolean, default: false }
}, { timestamps: true }
);

export default mongoose.model("Milestone", milestoneSchema);
