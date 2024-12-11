const mongoose = require("mongoose");
const postStatus = require("./PostStatus");
const categories = require("./Category");
const Schema = mongoose.Schema;

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
    required: true,
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
    default: postStatus[0],
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

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
