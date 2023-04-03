import { Post, PostRepository, PostService } from '../domain/post';
import { JwtUserAuthenticator } from '../authenticators/user-authenticator';

class DefaultPostService implements PostService {
  postRepository: PostRepository;
  userAuthenticator: JwtUserAuthenticator;

  constructor(
    postRepository: PostRepository,
    userAuthenticator: JwtUserAuthenticator
  ) {
    this.postRepository = postRepository;
    this.userAuthenticator = userAuthenticator;
  }

  async createPost(token: string, content: string): Promise<Post> {
    if (!content) {
      throw new Error('please return a content');
    }

    if (content.length > 280) {
      throw new Error('Post content should not exceed 280 characters');
    }

    if (!token) throw new Error('Please return a token');

    if (!(await this.userAuthenticator.isValidToken(token)))
      throw new Error('Invalid token');

    const decodedUser = await this.userAuthenticator.decodeToken(token);

    return this.postRepository.createPost(decodedUser.username, content);
  }

  async getAllPosts(limit: number, offset: number): Promise<Post[]> {
    if (limit < 0) {
      throw new Error('Limit should be greater than 0');
    }

    if (offset < 0) {
      throw new Error('Offset should be greater than 0');
    }

    if (typeof limit !== 'number') {
      throw new Error('Limit should be a number');
    }

    if (typeof offset !== 'number') {
      throw new Error('Offset should be a number');
    }

    return await this.postRepository.getAllPosts(limit, offset);
  }

  async getPostById(id: string): Promise<Post> {
    if (!id) {
      throw new Error('Please return an id');
    }

    return await this.postRepository.getPostById(id);
  }

  async updatePost(token: string, id: string, content: string): Promise<Post> {
    if (!id) {
      throw new Error('Please return an id');
    }

    if (!content) {
      throw new Error('Please return a content');
    }

    if (content.length > 280) {
      throw new Error('Post content should not exceed 280 characters');
    }

    if (!token) throw new Error('Please return a token');

    if (!(await this.userAuthenticator.isValidToken(token)))
      throw new Error('Invalid token');

    const decodedUser = await this.userAuthenticator.decodeToken(token);

    if (
      decodedUser.username !==
      (await this.postRepository.getPostById(id)).username
    )
      throw new Error('You are not authorized to update this post');

    return await this.postRepository.updatePost(
      decodedUser.username,
      id,
      content
    );
  }

  async deletePost(token: string, id: string): Promise<Post> {
    if (!id) {
      throw new Error('Please return an id');
    }

    if (!token) throw new Error('Please return a token');

    if (!(await this.userAuthenticator.isValidToken(token)))
      throw new Error('Invalid token');

    const decodedUser = await this.userAuthenticator.decodeToken(token);

    if (
      decodedUser.username !==
      (await this.postRepository.getPostById(id)).username
    )
      throw new Error('You are not authorized to update this post');

    return await this.postRepository.deletePost(decodedUser.username, id);
  }
}

export default DefaultPostService;
