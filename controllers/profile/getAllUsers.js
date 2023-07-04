const { range } = require("lodash");
const Users = require("../../models/Users");

module.exports = async (req, res) => {
  const limit = 20;
  const skip = req.query.page ? (req.query.page - 1) * limit : 0;
  const users = await Users.find().skip(skip).limit(limit);
  const total = await Users.countDocuments(); // 100
  const totalPage = range(1, total / limit + 1);
  const currentPage = req.query.page || 1;
  res.render("profile/index", { users, totalPage, currentPage });
};
