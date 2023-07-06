const { random, sample } = require("lodash");
const Likes = require("../models/Likes");

module.exports = async (users, dataset) => {
  const likes = [];
  for (const { data, model } of dataset) {
    for (const item of data) {
      const [min, max] = process.env.SEED_EACH_MODEL_LIKES.split(",");
      for (let i = 0; i < random(min, max); i++) {
        likes.push({
          user: sample(users)._id,
          modelId: item._id,
          onModel: model,
        });
      }
    }
  }
  await Likes.insertMany(likes);
};
