module.exports = (req, res, next) => {
  const success = req.flash("success");
  const error = req.flash("error");
  res.locals.alert = {
    success,
    error,
  };
  next();
};
