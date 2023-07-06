const { connect } = require("mongoose");

require("../models/Users");
require("../models/Posts");
require("../models/Comments");
require("../models/Likes");

module.exports = async () => {
  await connect(process.env.MONGODB_URL);
  console.log(`CONNECT DB SUCCESS`);
};
