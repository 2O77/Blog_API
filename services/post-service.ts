import { Post, PostRepository, PostService } from '../domain/post';

class DefaultPostService implements PostService {
  postRepository: PostRepository;

  constructor(postRepository: PostRepository) {
    this.postRepository = postRepository;
  }

  async createPost(content: string): Promise<Post> {
    if (!content) {
      throw new Error('please return a content');
    }

    if (content.length > 280) {
      throw new Error(
        'Post content should not exceed 280 characters',
      );
    }

    return this.postRepository.createPost(content);
  }

  async getAllPosts(limit: number, offset: number): Promise<Post[]> {
    return await this.postRepository.getAllPosts(limit, offset);
  }

  async updatePost(id: string, content: string): Promise<Post> {
    if (!id) {
      throw new Error('Please return an id');
    }

    if (!content) {
      throw new Error('Please return a content');
    }

    if (content.length > 280) {
      throw new Error(
        'Post content should not exceed 280 characters',
      );
    }

    return await this.postRepository.updatePost(id, content);
  }

  async deletePost(id: string): Promise<Post> {
    if (!id) {
      throw new Error('Please return an id');
    }

    return await this.postRepository.deletePost(id);
  }
}

export default DefaultPostService;
