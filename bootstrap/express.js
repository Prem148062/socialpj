const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
require("./useRouters")(app);

module.exports = app;