/* eslint-disable space-before-function-paren */
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "../.env.dev"),
});
const seedUsers = require("./users");
const seedPosts = require("./posts");
const seedComments = require("./comments");
const seedLike = require("./likes");
const mongodbConnet = require("../bootstrap/mongodbConnet");
const seedDeleteAll = require("./deleteAll");

async function run() {
  console.log("STARTING SEED ----->");
  await mongodbConnet();
  if (process.env.SEED_DELETE_OLD_DATA === "true") {
    console.log(`------> DELETED DATA.`);
    await seedDeleteAll();
  }
  console.log(`------> INSERT USERS.`);
  const users = await seedUsers();
  console.log(`------> INSERT POSTS.`);
  const posts = await seedPosts(users);
  console.log(`------> INSERT COMMENTS.`);
  const comments = await seedComments(users, posts);
  console.log(`------> INSERT LIKES.`);
  await seedLike(users, [
    {
      model: "Posts",
      data: posts,
    },
    {
      model: "Comments",
      data: comments,
    },
  ]);
  console.log(`------> INSERT DATA.`);
  console.log(`END -------->`);
  process.exit(0);
}

run();
