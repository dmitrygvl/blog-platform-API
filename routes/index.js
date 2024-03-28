const express = require("express");
const router = express.Router();
const multer = require("multer");
const UserController = require("../controllers/userController");
const PostController = require("../controllers/postController");
const tokenAuthentication = require("../middleware/auth");

const uploadsDestination = "uploads";

const storage = multer.diskStorage({
  destination: uploadsDestination,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploads = multer({ storage: storage });

//user routes
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/current", tokenAuthentication, UserController.current);
router.get("/users/:id", tokenAuthentication, UserController.getUserById);
router.put("/users/:id", tokenAuthentication, UserController.updateUser);

//posts routes
router.post("./posts", tokenAuthentication, PostController.createPost);
router.get("./posts", tokenAuthentication, PostController.getAllPosts);
router.post("./posts/:id", tokenAuthentication, PostController.getPostById);
router.delete("./posts/:id", tokenAuthentication, PostController.deletePost);

module.exports = router;
