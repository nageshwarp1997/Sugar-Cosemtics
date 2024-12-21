const { Schema } = require("mongoose");

const addressSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phone_1: String,
    phone_2: String,
    flat: String,
    apartment: String,
    landmark: String,
    street: String,
    city: String,
    state: String,
    country: String,
    pin_code: String,
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true, versionKey: false }
);

module.exports = addressSchema;
