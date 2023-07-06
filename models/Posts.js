const { Schema, model } = require("mongoose");
const schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    body: {
      type: String,
      required: true,
      maxlength: 10000,
    },
  },
  { timestamps: true }
);

schema.virtual("comments", {
  ref: "Comments",
  localField: "_id",
  foreignField: "modelId",
});

schema.virtual("likes", {
  ref: "Likes",
  localField: "_id",
  foreignField: "modelId",
  count: true,
});

module.exports = model("Posts", schema);
