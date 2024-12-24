import type { IPost, Post } from "../entities/post.entity";

export class PostDTO {
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

  constructor(post: IPost) {
    this.title = post.title;
    this.shortDescription = post.shortDescription;
    this.slug = post.slug;
    this.language = post.language;
    this.status = post.status;
    this.content = post.content;
    this.creationDate = post.creationDate;
    this.publishDate = post.publishDate;
    this.category = post.category;
    this.views = post.views;
    this.image = post.image;
    this.relatedPost = post.relatedPost;
  }
}
