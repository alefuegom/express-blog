import { PostDTO } from "../models/dtos/postDTO.dto";
import { Post } from "../models/entities/post.entity";

class PostService {
  async savePost(postData: PostDTO): Promise<PostDTO> {
    try {
      const newPost = new Post(postData);
      await newPost.save();
      return new PostDTO(newPost);
    } catch (error: any) {
      throw new Error(`Error saving the post: ${error.message}`);
    }
  }

  async getPosts(): Promise<PostDTO[]> {
    try {
      const posts = await Post.find();
      const result: Array<PostDTO> = posts.map(
        (post: any) => new PostDTO(post)
      );
      return result;
    } catch (error: any) {
      throw new Error(`Error getting the post list: ${error.message}`);
    }
  }
}
export const postService = new PostService();
