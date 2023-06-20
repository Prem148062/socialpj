const Users = require("../../models/Users");
const validateRegister = require("../../validates/validateRegister");

module.exports = [
  validateRegister,
  async (req, res) => {
    const user = await Users.create(req.body);
    req.flash("success", `${user.email} Register Completed.`);
    res.redirect("/auth/login");
  },
];
