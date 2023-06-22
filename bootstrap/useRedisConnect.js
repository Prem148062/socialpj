const RedisStore = require("connect-redis").default;
const { createClient } = require("redis");
const redisClient = createClient({ url: "redis://127.0.0.1:6379" });
redisClient.connect().catch(console.error);
const redisStore = new RedisStore({
  client: redisClient,
  prefix: "myapp:",
});
module.exports = redisStore;
