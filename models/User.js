import mongoose from 'mongoose';

const { String } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      select: false // won't send password to client
    },
    role: {
      type: String,
      required: true,
      default: 'user',
      enum: ['user', 'admin', 'root'] // roles
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.models.User || mongoose.model('User', UserSchema);
