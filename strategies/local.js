const { Strategy } = require("passport-local");
const Users = require("../models/Users");

const strategy = new Strategy(
  {
    usernameField: "email",
    passwordField: "password",
    session: true,
  },
  async (email, password, next) => {
    try {
      const user = await Users.findOne({ email });
      if (!user) {
        throw new Error("Email Or Password Invalid");
      }
      await user.comparePassword(password);
      next(null, user);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = strategy;
