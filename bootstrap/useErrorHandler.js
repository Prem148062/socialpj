module.exports = (err, req, res, next) => {
  req.flash("error", err.message || "InternetServers");
  if (err?.code.includes("PUG")) {
    res.send(err);
  } else {
    return res.redirect("back");
  }
};
