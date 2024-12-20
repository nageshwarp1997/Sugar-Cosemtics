const { model } = require("mongoose");

const addressSchema = require("../schemas/address.schema");
const cartSchema = require("../schemas/cart.schema");
const userSchema = require("../schemas/user.schema");
const wishlistSchema = require("../schemas/wishlist.schema");

const Address = model("Address", addressSchema);
const Cart = model("Cart", cartSchema);
const User = model("User", userSchema);
const Wishlist = model("Wishlist", wishlistSchema);

module.exports = { Address, Cart, User, Wishlist };
