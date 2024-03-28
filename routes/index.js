const express = require("express");
const router = express.Router();
const multer = require("multer");
const UserController = require("../controllers");
const tokenAuthentication = require("../middleware/auth");

const uploadsDestination = "uploads";

const storage = multer.diskStorage({
  destination: uploadsDestination,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploads = multer({ storage: storage });

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/current", tokenAuthentication, UserController.current);
router.get("/users/:id", tokenAuthentication, UserController.getUserById);
router.put("/users/:id", tokenAuthentication, UserController.updateUser);

module.exports = router;
