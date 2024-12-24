import { IPost } from "../entities/post.entity";
import { PostDTO } from "./postDTO.dto";

export interface IBlogMainResponse {
  mainPosts: Array<BlogMainPagePost>;
}

export class BlogMainPagePost {
  title: string;
  shortDescription: string;
  slug: string;
  image?: string;
  category: string;

  constructor(post: PostDTO) {
    this.title = post.title;
    this.shortDescription = post.shortDescription;
    this.slug = post.slug;
    this.image = post.image;
    this.category = post.category;
  }
}
