const Comments = require("../../models/Comments");
const Posts = require("../../models/Posts");

module.exports = async (req, res) => {
  const post = await Posts.findById(req.params.id);
  if (!post) {
    throw new Error("Post Not found");
  }
  await Comments.create({
    user: req.user._id,
    modelId: post._id,
    onModel: "Posts",
    body: req.body.body,
  });
  req.flash("success", "comment success!");
  res.redirect("/");
};
