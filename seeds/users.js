const { faker } = require("@faker-js/faker");
const { sample } = require("lodash");
const Users = require("../models/Users");

const users = [];
for (let i = 0; i < process.env.SEED_USERS; i++) {
  users.push({
    email: faker.internet.email(),
    password: "123",
    username: `${faker.internet.userName()}${faker.number.int(10, 999)}`,
    displayName: sample([undefined, faker.person.firstName()]),
    birthDate: sample[(undefined, faker.date.past())],
    gender: sample(["male", "female", "none"]),
    avatarUrl: sample([undefined, faker.internet.avatar()]),
  });
}

module.exports = async () => {
  await Users.insertMany(users);
};
