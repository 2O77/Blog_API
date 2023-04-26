import mongoose, { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'username is required'],
      unique: [true, 'username already exists'],
    },
    password: {
      type: String,
      required: [true, 'password is required'],
      trim: true,
    },
    createdAt: {
      type: Date,
      required: [true, ''],
      trim: true,
      default: Date,
    },
    updatedAt: {
      type: Date,
      required: [true, ''],
      default: Date,
      trim: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
export const User = model('User', userSchema);
