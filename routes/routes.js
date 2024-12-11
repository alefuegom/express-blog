const express = require("express");
const router = express.Router();

// POST - ROUTES
const postController = require("../controllers/postController");
const postPath = "/posts";
router.get(postPath, postController.getPosts);
router.post(postPath, postController.createPost);

module.exports = router;
