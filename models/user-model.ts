import mongoose, { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'you have to write something bro'],
      trim: true
    },
    password: {
      type: String,
      required: [true, 'you have to write something bro'],
      trim: true
    },
    createdAt: {
      type: Date,
      required: [true, ''],
      trim: true,
      default: Date
    },
    updatedAt: {
      type: Date,
      required: [true, ''],
      default: Date,
      trim: true
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
export const User = mongoose.model('User', userSchema);
