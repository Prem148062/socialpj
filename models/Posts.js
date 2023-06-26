const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    body: {
      type: String,
      required: true,
      maxLength: 1000,
    },
  },
  { timestamps: true }
);

module.exports = model("Posts", postSchema);
