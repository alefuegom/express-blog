import { postService } from "../services/postService";
import { Request, Response } from "express";
export class PostController {
  async getPosts(req: Request, res: Response) {
    try {
      const posts = await postService.getPosts();
      return res.status(200).json({
        posts,
      });
    } catch (error: any) {
      res.status(500).json({
        message: "Error getting the post list",
        error: error.message,
      });
    }
  }
  /**
   * Create a new post
   * @param {*} req
   * @param {*} res
   */
  async createPost(req: Request, res: Response) {
    try {
      const postData = req.body;

      const savedPost = await postService.savePost(postData);

      res.status(201).json({
        post: savedPost,
      });
    } catch (error: any) {
      res.status(500).json({
        message: "Error creating the post",
        error: error.message,
      });
    }
  }
}
export const postController = new PostController();
