module.exports = (err, req, res, next) => {
  req.flash("error", err.message || "InternetServers");
  res.redirect("back");
};
