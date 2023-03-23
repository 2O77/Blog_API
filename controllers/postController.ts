import { Request, Response } from 'express';
import { PostService } from '../domain/post';


export class ExpressPostController {
    constructor(private postService: PostService) { }

    async createPost(req: Request, res: Response) {
        try {
            const content = req.body.content;

            const post = await this.postService.createPost(content);

            res.status(201).json(post);
        } catch (err) {
            res.status(500).send(err.toString())
        }
    }

    async getAllPosts(req: Request, res: Response) {
        try {
            const limit = parseInt(req.query.limit.toString())
            const offset = parseInt(req.query.offset.toString())

            const post = await this.postService.getAllPosts(limit, offset)

            res.status(201).json(post);
        } catch (err) {
            res.status(500).send("An error occurred while getting all posts. Please try again later.")
        }

    }

    async updatePost(req: Request, res: Response) {
        try {
            const id = req.query.id.toString()

            const content = req.body.content

            const post = await this.postService.updatePost(id, content)

            res.status(200).json(post)

        } catch (err) {
            res.status(400).send(err.toString())
        }
    }

    async deletePost(req: Request, res: Response) {
        try {
            const id = req.query.id.toString()

            const post = await this.postService.deletePost(id)

            res.status(200).json({ post: post, message: "this post is deleted" })

        } catch (err) {
            res.status(400).json(err.toString())
        }
    }
}
export default ExpressPostController