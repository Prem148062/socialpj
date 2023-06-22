const express = require("express");
const path = require("path");
const session = require("express-session");
const ms = require("ms");
const isProd = require("../utils/isProd");
const flash = require("connect-flash");
const useErrorHandler = require("./useErrorHandler");
const passport = require("passport");
const redisStore = require("./useRedisConnect");
const methodOverride = require("method-override");
const app = express();
const sessionOptins = {
  store: redisStore,
  secret: process.env.SECRET_KEY,
  cookie: {
    httpOnly: true,
    secure: isProd,
    maxAge: ms("7d"),
  },
  rolling: true,
  saveUninitialized: false,
  resave: false,
};

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session(sessionOptins));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(require("../bootstrap/useGlobaldata")); // global flash variable
app.use(methodOverride("_method"));
app.use("/public", express.static(path.join(__dirname, "../public")));
require("./useRouters")(app);
app.use(useErrorHandler);

module.exports = app;
