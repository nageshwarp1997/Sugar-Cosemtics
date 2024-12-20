const { Schema } = require("mongoose");

const addressSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    flat: String,
    apartment: String,
    landmark: String,
    street: String,
    city: String,
    state: String,
    country: String,
    pin_code: String,
  },
  { timestamps: true, versionKey: false }
);

module.exports = addressSchema;
