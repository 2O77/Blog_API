import express from 'express';
import { Router } from 'express';
import { ExpressPostController } from './controllers/post-controller';
import MongoPostRepository from './repositories/post-repository';
import { PostService } from './domain/post';
import DefaultPostService from './services/post-service';
import ExpressUserController from './controllers/user-controller';
import MongoUserRepository from './repositories/user-repository';
import { UserService } from './domain/user';
import { JwtUserAuthenticator } from './authenticators/user-authenticator';
import DefaultUserService from './services/user-service';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const port = 3000;
const app = express();
const db = 'mongodb+srv://bnrbrr:1234@cluster0.hjczkrr.mongodb.net/course_api';

mongoose
  .connect(db)
  .then(() => console.log('MongoDB bağlantısı başarılı.'))
  .catch((err) => console.log('MongoDB bağlantısı hatası: ', err));

const mongoPostRepository: MongoPostRepository = new MongoPostRepository();
const postService: PostService = new DefaultPostService(mongoPostRepository);
const postController: ExpressPostController = new ExpressPostController(
  postService
);

const mongoUserRepository: MongoUserRepository = new MongoUserRepository();
const UserAuthenticator: JwtUserAuthenticator = new JwtUserAuthenticator();
const userService: UserService = new DefaultUserService(
  mongoUserRepository,
  UserAuthenticator
);
const userController: ExpressUserController = new ExpressUserController(
  userService
);

const router = Router();

app.use(bodyParser.json());
app.use(router);

router.get('/posts', postController.getAllPosts.bind(postController));
router.post('/posts', postController.createPost.bind(postController));
router.patch('/posts', postController.updatePost.bind(postController));
router.delete('/posts', postController.deletePost.bind(postController));

router.post('/users', userController.loginUser.bind(userController));

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda dinleniyor.`);
});
