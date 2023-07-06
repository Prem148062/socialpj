const Posts = require("../../models/Posts");
module.exports = async (req, res) => {
  try {
    const limit = 10;
    const posts = await Posts.find()
      .populate("user")
      .populate({
        path: "comments",
        populate: [
          {
            path: "user",
          },
          {
            path: "likes",
          },
        ],
      })
      .populate("likes")
      .limit(limit)
      .sort("-createdAt");
    res.render("index", { posts });
  } catch (error) {
    console.log(error);
  }
};
