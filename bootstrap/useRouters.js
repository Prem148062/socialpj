module.exports = (app) => {
  app.use("/auth", require("../routers/auth"));
  app.use("/", require("../routers/home"));
  app.use("/profile", require("../routers/profile"));
};
