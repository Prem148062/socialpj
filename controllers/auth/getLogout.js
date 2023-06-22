module.exports = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "Logout Success");
    return res.redirect("/");
  });
};
