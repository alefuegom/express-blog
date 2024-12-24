import mongoose, { Schema, Document } from "mongoose";
import slugify from "slugify";
import { postStatus } from "./postStatus.entity";
import { categories } from "./category.entity";
export interface IPost extends Document {
  title: string;
  shortDescription: string;
  slug: string;
  language: string;
  status: number;
  content: string;
  creationDate: Date;
  publishDate?: Date;
  category: string;
  views: number;
  image?: string;
  relatedPost?: string[];
}

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
    trim: true,
    index: true,
  },
  language: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  status: {
    type: Number,
    required: true,
    enum: postStatus.map((status) => status.code),
    default: postStatus[0].code,
  },
  content: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  publishDate: {
    type: Date,
  },
  category: {
    type: String,
    required: true,
    enum: categories.map((category) => category.code),
  },
  views: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    required: false,
  },
  relatedPost: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: false,
    },
  ],
});

postSchema.pre("save", function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});
export const Post = mongoose.model<IPost>("Post", postSchema);
