const { faker } = require("@faker-js/faker");
const Comments = require("../models/Comments");
const { sample, random } = require("lodash");
module.exports = async (users, posts) => {
  const comments = [];
  const [min, max] = process.env.SEED_EACH_POSTS_COMMENTS.split(",");
  for (const post of posts) {
    const commentsCount = random(min, max);
    for (let i = 0; i <= commentsCount; i++) {
      comments.push({
        user: sample(users)._id,
        modelId: post._id,
        onModel: "Posts",
        body: sample([
          faker.lorem.paragraphs(),
          faker.lorem.paragraph(),
          faker.lorem.sentence(),
        ]),
        createdAt: faker.date.past(),
      });
    }
  }
  const result = await Comments.insertMany(comments);
  return result;
};
