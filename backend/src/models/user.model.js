const { model } = require("mongoose");
const userSchema = require("../schemas/usder.schema");

const User = model("User", userSchema);

module.exports = User;
