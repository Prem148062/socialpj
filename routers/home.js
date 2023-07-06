const router = require("express").Router();
const getIndex = require("../controllers/index/getIndex");
const newComment = require("../controllers/index/newComment");
const newPosts = require("../controllers/index/newPosts");
const authOnly = require("../middleware/authOnly");

router.get("/", getIndex);
router.post("/post", authOnly, newPosts);
router.post("/post/comment/:id", authOnly, newComment);
module.exports = router;
