const postService = require("../services/postService");

async function getPosts(req, res) {
  try {
    const posts = await postService.getPosts();
    return res.status(200).json({
      posts,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting the post list",
      error: error.message,
    });
  }
}

async function createPost(req, res) {
  try {
    const postData = req.body;

    const savedPost = await postService.savePost(postData);

    res.status(201).json({
      post: savedPost,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating the post",
      error: error.message,
    });
  }
}

module.exports = {
  createPost,
  getPosts,
};
