/* eslint-disable spaced-comment */
const Comments = require("../models/Comments");
const Posts = require("../models/Posts");
const Users = require("../models/Users");

module.exports = () => {
  return Promise.all([
    Users.deleteMany(),
    Posts.deleteMany(),
    Comments.deleteMany(),
  ]);
};
