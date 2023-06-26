const Users = require("../../models/Users");

module.exports = async (req, res) => {
  const user = await Users.findOne({ username: req.params.username });
  if (!user) {
    throw new Error("User Not found");
  }
  res.render("profile/profile", { user });
};
