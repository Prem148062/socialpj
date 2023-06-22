const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

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
    displayName: {
      type: String,
    },
    birthDate: {
      type: Date,
    },
    gender: {
      type: String,
      enum: ["male", "female", "none"],
      default: "none",
    },
    avatar: {
      type: String,
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
