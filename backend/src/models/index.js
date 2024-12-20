const { model } = require("mongoose");

const addressSchema = require("../schemas/address.schema");
const userSchema = require("../schemas/user.schema");
const wishlistSchema = require("../schemas/wishlist.schema");

const Address = model("Address", addressSchema);
const User = model("User", userSchema);
const Wishlist = model("Wishlist", wishlistSchema);

module.exports = { User, Wishlist, Address };
