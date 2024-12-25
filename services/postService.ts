import { PostDTO } from "../models/dtos/postDTO.dto";
import { IPost, Post } from "../models/entities/post.entity";

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
  /**
   * Retrieves a post list providing search criteria.
   *
   * By default, it retrieves a post list that contains
   * the last three posts.
   *
   * @param {*} [query={}]
   * @param {number} [limit=3]
   * @param {*} [sortQuery={ creationDate: -1 }]
   * @return {*}  {Promise<Array<PostDTO>>}
   * @memberof PostService
   */
  async getGenericPostsByQuery(
    query: any = {},
    limit: number = 3,
    sortQuery: any = { creationDate: -1 }
  ): Promise<Array<PostDTO>> {
    try {
      const posts = await Post.find(query).sort(sortQuery).limit(limit);
      const result: Array<PostDTO> = posts.map(
        (post: IPost) => new PostDTO(post)
      );
      return result;
    } catch (error: any) {
      throw new Error(`Error getting the post list: ${error.message}`);
    }
  }
}
export const postService = new PostService();
