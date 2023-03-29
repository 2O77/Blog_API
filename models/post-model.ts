import mongoose, { Schema, model } from 'mongoose';

const postSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, 'you have to write something bro'],
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
  },
);
export const Post = mongoose.model('Post', postSchema);
