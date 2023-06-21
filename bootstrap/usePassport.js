/* eslint-disable spaced-comment */
const passport = require("passport");
const local = require("../strategies/local");
const Users = require("../models/Users");

passport.use(local);

passport.serializeUser((user, next) => {
  next(null, user._id);
});

passport.deserializeUser(async (id, next) => {
  try {
    const user = await Users.findById(id);
    next(null, user);
  } catch (error) {
    next(error);
  }
});
