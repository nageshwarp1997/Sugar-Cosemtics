const { Schema } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    username: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    phone: { type: Number, required: true },
    profilePic: { type: String },
    dob: { type: Date, required: true },
    gender: { type: String },
    addresses: [{ type: Schema.Types.ObjectId, ref: "Address" }],
    wishlist: [{ type: Schema.Types.ObjectId, ref: "Wishlist" }],
    cart: [{ type: Schema.Types.ObjectId, ref: "Cart" }],
    orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
    payments: [{ type: Schema.Types.ObjectId, ref: "Payment" }],
    ratings: [{ type: Schema.Types.ObjectId, ref: "Rating" }],
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    security: { type: Schema.Types.ObjectId, ref: "Security" },
  },
  { timestamps: true, versionKey: false }
);

module.exports = userSchema;
