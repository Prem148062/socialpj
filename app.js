const isProd = require("./utils/isProd");
const path = require("path");
const dotenv = require("dotenv");
const dotenOptions = {
  path: isProd
    ? path.join(__dirname, ".env.prod")
    : path.join(__dirname, ".env.dev"),
};
dotenv.config(dotenOptions);
const { PORT } = process.env;
const connectDB = require("./bootstrap/mongodbConnet");
const app = require("./bootstrap/express");
const startApp = async () => {
  try {
    await connectDB();
    require("./bootstrap/usePassport");
    app.listen(PORT, () => {
      console.log(`Express Start at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(new Date(), err);
    process.exit(1);
  }
};

startApp();
