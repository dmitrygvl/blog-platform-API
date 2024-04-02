const express = require('express');
const router = express.Router();
const multer = require('multer');
const UserController = require('../controllers/userController');
const PostController = require('../controllers/postController');
const CommentController = require('../controllers/commentController');
const LikeController = require('../controllers/likeController');
const FollowController = require('../controllers/followController');
const tokenAuthentication = require('../middleware/auth');

const uploadsDestination = 'uploads';

const storage = multer.diskStorage({
  destination: uploadsDestination,
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploads = multer({ storage: storage });

//user routes
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/current', tokenAuthentication, UserController.current);
router.get('/users/:id', tokenAuthentication, UserController.getUserById);
router.put(
  '/users/:id',
  tokenAuthentication,
  uploads.single('avatar'),
  UserController.updateUser,
);

//posts routes
router.post('./posts', tokenAuthentication, PostController.createPost);
router.get('./posts', tokenAuthentication, PostController.getAllPosts);
router.post('./posts/:id', tokenAuthentication, PostController.getPostById);
router.delete('./posts/:id', tokenAuthentication, PostController.deletePost);

//comments routes
router.post('/comments', tokenAuthentication, CommentController.createComment);
router.delete(
  '/comments/:id',
  tokenAuthentication,
  CommentController.deleteComment,
);

// likes routes
router.post('/likes', tokenAuthentication, LikeController.likePost);
router.delete('/likes', tokenAuthentication, LikeController.unlikePost);

// follow routes
router.post('/follow', tokenAuthentication, FollowController.followUser);
router.delete(
  '/unfollow/:id',
  tokenAuthentication,
  FollowController.unfollowUser,
);

module.exports = router;
