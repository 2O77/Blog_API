import express from 'express';
import { Router } from 'express';
import { ExpressPostController } from './controllers/postController';
import MongoPostRepository from './repositories/postRepository';
import { PostService } from './domain/post';
import DefaultPostService from './services/post-service';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const port = 3000;
const app = express();
const db = "mongodb+srv://bnrbrr:1234@cluster0.hjczkrr.mongodb.net/course_api"

mongoose.connect(db)
    .then(() => console.log('MongoDB bağlantısı başarılı.'))
    .catch((err) => console.log('MongoDB bağlantısı hatası: ', err));

const mongoPostRepository: MongoPostRepository = new MongoPostRepository();
const postService: PostService = new DefaultPostService(mongoPostRepository)
const postController: ExpressPostController = new ExpressPostController(postService);

const router = Router(); // Router fonksiyonu express modülünden import edildi

app.use(bodyParser.json())
app.use(router);

router.get("/posts", postController.getAllPosts.bind(postController))
router.post('/posts', postController.createPost.bind(postController));
router.patch("/posts", postController.updatePost.bind(postController))
router.delete("/posts", postController.deletePost.bind(postController))

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda dinleniyor.`);
});


