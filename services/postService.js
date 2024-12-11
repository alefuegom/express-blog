const Post = require("../models/Post");

async function savePost(postData) {
  try {
    const newPost = new Post(postData);
    await newPost.save();
    return newPost;
  } catch (error) {
    throw new Error(`Error saving the post: ${error.message}`);
  }
}

async function getPosts() {
  try {
    const posts = Post.find();
    return posts;
  } catch (error) {
    throw new Error(`Error getting the post list: ${error.message}`);
  }
}

module.exports = { getPosts, savePost };
