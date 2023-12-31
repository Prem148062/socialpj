const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    modelId: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: "onModel",
    },
    onModel: {
      type: String,
      required: true,
      enum: ["Posts"],
    },
    body: {
      type: String,
      required: true,
      maxLength: 5000,
    },
  },
  { timestamps: true }
);
commentSchema.virtual("likes", {
  ref: "Likes",
  localField: "_id",
  foreignField: "modelId",
  count: true,
});

module.exports = model("Comments", commentSchema);
