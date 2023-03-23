interface Post {
    id: string,
    content: string,
    createdAt: Date,
    updatedAt: Date
}

interface PostRepository {
    createPost(content: string): Promise<Post>
    getAllPosts(limit: number, offset: number): Promise<Post[]>
    updatePost(id: string, content: string): Promise<Post>
    deletePost(id: string): Promise<Post>
}

interface PostService {
    createPost(content: string): Promise<Post>
    getAllPosts(limit: number, offset: number): Promise<Post[]>
    updatePost(id: string, content: string): Promise<Post>
    deletePost(id: string): Promise<Post>

}

export { Post, PostRepository, PostService }
