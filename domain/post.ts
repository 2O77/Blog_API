interface Post {
  username: string;
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

interface PostRepository {
  createPost(username: string, content: string): Promise<Post>;
  getAllPosts(limit: number, offset: number): Promise<Post[]>;
  getPostById(id: string): Promise<Post>;
  updatePost(username: string, id: string, content: string): Promise<Post>;
  deletePost(username: string, id: string): Promise<Post>;
}

interface PostService {
  createPost(token: string, content: string): Promise<Post>;
  getAllPosts(limit: number, offset: number): Promise<Post[]>;
  getPostById(id: string): Promise<Post>;
  updatePost(token: string, id: string, content: string): Promise<Post>;
  deletePost(token: string, id: string): Promise<Post>;
}

export { Post, PostRepository, PostService };
