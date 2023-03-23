"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_2 = require("express");
var postController_1 = require("./controllers/postController");
var postRepository_1 = __importDefault(require("./repositories/postRepository"));
var post_service_1 = __importDefault(require("./services/post-service"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
var port = 3000;
var app = (0, express_1.default)();
var db = "mongodb+srv://bnrbrr:1234@cluster0.hjczkrr.mongodb.net/course_api";
mongoose_1.default.connect(db)
    .then(function () { return console.log('MongoDB bağlantısı başarılı.'); })
    .catch(function (err) { return console.log('MongoDB bağlantısı hatası: ', err); });
var mongoPostRepository = new postRepository_1.default();
var postService = new post_service_1.default(mongoPostRepository);
var postController = new postController_1.ExpressPostController(postService);
var router = (0, express_2.Router)(); // Router fonksiyonu express modülünden import edildi
app.use(body_parser_1.default.json());
app.use(router);
router.get("/posts", postController.getAllPosts.bind(postController));
router.post('/posts', postController.createPost.bind(postController));
router.patch("/posts", postController.updatePost.bind(postController));
router.delete("/posts", postController.deletePost.bind(postController));
app.listen(port, function () {
    console.log("Sunucu ".concat(port, " portunda dinleniyor."));
});
//# sourceMappingURL=index.js.map