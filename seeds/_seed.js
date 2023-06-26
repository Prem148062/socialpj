/* eslint-disable space-before-function-paren */
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "../.env.dev"),
});
const seedUsers = require("./users");
const mongodbConnet = require("../bootstrap/mongodbConnet");
const seedDeleteAll = require("./deleteAll");

async function run() {
  console.log("STARTING SEED ----->");
  await mongodbConnet();
  if (process.env.SEED_DELETE_OLD_DATA === "true") {
    console.log(`------> DELETED DATA.`);
    await seedDeleteAll();
  }
  await seedUsers();
  console.log(`------> INSERT DATA.`);
  console.log(`END -------->`);
  process.exit(0);
}

run();
