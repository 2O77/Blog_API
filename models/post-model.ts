import mongoose, { Schema, model } from 'mongoose';

const postSchema = new Schema(
  {
    username: { type: String, required: [true, 'user is required'] },
    content: {
      type: String,
      required: [true, 'content is required'],
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
export const Post = mongoose.model('Post', postSchema);
