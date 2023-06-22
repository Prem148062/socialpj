module.exports = (req, res, next) => {
  if (!req.user) {
    req.flash("error", "Please Login first.");
    return res.redirect("/");
  }
  next();
};
