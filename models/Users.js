const { Schema, model } = require("mongoose");
const { DateTime } = require("luxon");
const bcrypt = require("bcrypt");
const { faker } = require("@faker-js/faker");

const schema = new Schema(
  {
    email: {
      required: true,
      unique: true,
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
      default: () => `${faker.string.alphanumeric(20)}`,
    },
    displayName: {
      type: String,
    },
    birthDate: {
      type: Date,
      get: function (date) {
        const d = DateTime.fromJSDate(date);
        return d.toISODate();
      },
    },
    gender: {
      type: String,
      enum: ["male", "female", "none"],
      default: "none",
    },
    avatarUrl: {
      type: String,
      get: function (url) {
        if (!url) {
          return `https://via.placeholder.com/150`;
        }
        return url;
      },
    },
  },
  { timestamps: true }
);

const preSetPassword = async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, +process.env.SALT_ROUNDS);
  }
  next();
};

schema.pre("save", preSetPassword);
schema.pre("updateOne", preSetPassword);
schema.methods.comparePassword = async function (password) {
  // binding this
  const result = await bcrypt.compare(password, this.password);
  if (!result) {
    throw new Error("Email Or Password Invaild");
  }
  return result;
};

module.exports = model("Users", schema);
