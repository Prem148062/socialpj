const router = require("express").Router();
const getIndex = require("../controllers/index/getIndex");
const newPosts = require("../controllers/index/newPosts");

router.get("/", getIndex);
router.post("/post", newPosts);
module.exports = router;
