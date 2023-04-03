import { Post as MongoPost } from './../models/post-model';
import { Post, PostRepository } from '../domain/post';
import { isValidObjectId } from 'mongoose';

class MongoPostRepository implements PostRepository {
  constructor() {}

  async createPost(username: string, content: string): Promise<Post> {
    const myModel = new MongoPost({
      username,
      content,
      updatedAt: Date.now(),
      createdAt: Date.now(),
    });
    const post = await myModel.save();

    return {
      username: post.username,
      id: post.id,
      content: post.content,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    };
  }

  async getAllPosts(limit: number, offset: number): Promise<Post[]> {
    const posts = await MongoPost.find({}).skip(offset).limit(limit);

    const convertedPosts: Post[] = posts.map((post) => {
      return {
        username: post.username,
        id: post.id,
        content: post.content,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      };
    });

    return convertedPosts;
  }

  async getPostById(id: string): Promise<Post> {
    const post = await MongoPost.findById(id);

    return {
      username: post.username,
      id: post.id,
      content: post.content,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    };
  }

  async updatePost(
    username: string,
    id: string,
    content: string
  ): Promise<Post> {
    if (!isValidObjectId(id)) {
      throw new Error('please return a valid id');
    }

    if (!username) {
      throw new Error('username is required');
    }

    const post = await MongoPost.findByIdAndUpdate(
      { _id: id, username: username },
      { content: content, updatedAt: Date.now() }
    );

    return {
      username: post.username,
      id: post.id,
      content: post.content,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    };
  }

  async deletePost(username: string, id: string): Promise<Post> {
    if (!isValidObjectId(id)) {
      throw new Error('please return a valid id');
    }

    const post = await MongoPost.findByIdAndDelete({ _id: id });

    return {
      username: post.username,
      id: post.id,
      content: post.content,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    };
  }
}
export default MongoPostRepository;
