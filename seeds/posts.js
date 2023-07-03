const { random, sample } = require("lodash");
const Posts = require("../models/Posts");
const { faker } = require("@faker-js/faker");

module.exports = async (users) => {
  const [min, max] = process.env.SEED_EACH_USER_POSTS.split(",");
  const posts = [];
  for (const user of users) {
    const postCount = random(min, max);
    for (let i = 0; i <= postCount; i++) {
      posts.push({
        user: user._id,
        body: sample([
          faker.lorem.paragraphs(),
          faker.lorem.paragraph(),
          faker.lorem.sentence(),
        ]),
        createdAt: faker.date.past(),
      });
    }
  }
  const result = await Posts.insertMany(posts);
  return result;
};
