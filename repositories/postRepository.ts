import { Post as MongoPost } from "./../models/postModel"
import { Post, PostRepository } from "../domain/post";
import { isValidObjectId } from "mongoose";


class MongoPostRepository implements PostRepository {


    constructor() {

    }


    async createPost(content: string): Promise<Post> {
        const myModel = new MongoPost({
            content,
            updatedAt: Date.now(),
            createdAt: Date.now()
        });



        const post = await myModel.save()

        return {
            id: post.id,
            content: post.content,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt
        }
    }
    async getAllPosts(limit: number, offset: number): Promise<Post[]> {
        const posts = await MongoPost.find({}).skip(offset).limit(limit)

        const convertedPosts: Post[] = posts.map(post => {
            return {
                id: post.id,
                content: post.content,
                createdAt: post.createdAt,
                updatedAt: post.updatedAt
            }
        })

        return convertedPosts
    }

    async updatePost(id: string, content: string): Promise<Post> {

        if (!isValidObjectId(id)) {
            throw new Error("please return a valid id")
        }

        const post = await MongoPost.findByIdAndUpdate({ _id: id }, { content: content, updatedAt: Date.now() })

        return {
            id: post.id,
            content: post.content,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt
        }
    }

    async deletePost(id: string): Promise<Post> {

        if (!isValidObjectId(id)) {
            throw new Error("please return a valid id")
        }

        const post = await MongoPost.findByIdAndDelete({ _id: id })

        return {
            id: post.id,
            content: post.content,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt
        }

    }
}
export default MongoPostRepository