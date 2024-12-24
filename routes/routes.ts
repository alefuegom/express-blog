import { Router, Request, Response } from "express";
import { postController } from "../controllers/postController";
const router: Router = Router();

// POST - ROUTES
const postPath = "/posts";
router.get(postPath, (req: Request, res: Response) => {
  postController.getPosts(req, res);
});
router.post(postPath, (req: Request, res: Response) => {
  postController.createPost(req, res);
});

export default router;
