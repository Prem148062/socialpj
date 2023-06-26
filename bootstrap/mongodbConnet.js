const { connect } = require("mongoose");

require("../models/Users");
require("../models/Posts");

module.exports = async () => {
  await connect(process.env.MONGODB_URL);
  console.log(`CONNECT DB SUCCESS`);
};
