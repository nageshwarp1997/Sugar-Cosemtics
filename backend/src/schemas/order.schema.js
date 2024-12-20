const { Schema } = require("mongoose");

const statuses = [
  "PENDING",
  "CONFIRMED",
  "SHIPPED",
  "DELIVERED",
  "CANCELLED",
  "RETURNED",
  "REFUNDED",
  "REJECTED",
  "REPLACED",
];

const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    totalPrice: { type: Number, default: 0 },
    finalPrice: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    status: { type: String, default: "PENDING", enum: statuses },
    address: { type: Schema.Types.ObjectId, ref: "Address" },
    totalQuantity: { type: Number, default: 0 },
  },
  { timestamps: true, versionKey: false }
);

module.exports = orderSchema;