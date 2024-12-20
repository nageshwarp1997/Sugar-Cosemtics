const { model } = require("mongoose");
const addressSchema = require("../schemas/address.schema");

const Address = model("Address", addressSchema);

module.exports = Address;
