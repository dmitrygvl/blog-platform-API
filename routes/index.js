const express = require("express");
const router = express.Router();
const multer = require("multer");

const uploadsDestination = "uploads";

const storage = multer.diskStorage({
  destination: uploadsDestination,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploads = multer({ storage: storage });

router.get("/register", (req, res) => {
  res.send("register");
});

module.exports = router;
