const Posts = require("../../models/Posts");

module.exports = async (req, res) => {
  await Posts.create({
    user: req.user._id,
    body: req.body.body,
  });
  req.flash("success", "Post success!");
  res.redirect("/");
};
