import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },

  email: { type: String, required: true, unique: true },

  password: { type: String, required: true },

  role: {
    type: String,
    enum: ["FOUNDER", "MEMBER", "ADMIN"],
    default: "FOUNDER"
  },

  startups: [
    {
      startupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Startup"
      },
      role: {
        type: String,
        enum: ["FOUNDER", "ADMIN", "MEMBER"]
      }
    }
  ],

  isActive: { type: Boolean, default: true }
}, { timestamps: true });


const User = mongoose.model('User', UserSchema);
export default User
