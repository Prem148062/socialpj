const Likes = require("../../models/Likes");
const { capitalize } = require("lodash");
module.exports = async (req, res) => {
  const payload = {
    user: req.user._id,
    modelId: req.params.id,
    onModel: capitalize(req.params.model),
  };

  const like = await Likes.findOne(payload);
  if (like) {
    await like.deleteOne();
    req.flash("success", "UnLike");
    return res.redirect("/");
  }
  await Likes.create(payload);
  req.flash("success", "Like");
  return res.redirect("/");
};
