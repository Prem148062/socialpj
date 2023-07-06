/* eslint-disable spaced-comment */
const Comments = require("../models/Comments");
const Likes = require("../models/Likes");
const Posts = require("../models/Posts");
const Users = require("../models/Users");

module.exports = () => {
  return Promise.all([
    Users.deleteMany(),
    Posts.deleteMany(),
    Comments.deleteMany(),
    Likes.deleteMany(),
  ]);
};
