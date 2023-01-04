const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: String, // String is shorthand for {type: String}
    content: String,
    postNum: Number,
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true, collection: "posts" }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
