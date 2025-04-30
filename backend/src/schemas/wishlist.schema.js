const { Schema } = require("mongoose");

const wishlistSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true, versionKey: false }
);

module.exports = wishlistSchema;
