const { Schema } = require("mongoose");

const cartSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    products: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1 },
      },
    ],
    totalPrice: { type: Number, default: 0 },
    finalPrice: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    totalQuantity: { type: Number, default: 0 },
    balance: { type: Number, default: 0 },
  },
  { timestamps: true, versionKey: false }
);

module.exports = cartSchema;
