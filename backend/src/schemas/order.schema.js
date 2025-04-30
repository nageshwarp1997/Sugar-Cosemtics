const { Schema } = require("mongoose");

const statuses = [
  "PENDING",
  "PROCESSING",
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
    products: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1 },
        total: { type: Number, default: 0 },
      },
    ],
    totalPrice: { type: Number, default: 0 },
    finalPrice: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    status: { type: String, default: "PENDING", enum: statuses },
    totalQuantity: { type: Number, default: 0 },
    paymentInfo: {
      method: { type: String, required: true },
      transactionId: { type: String, required: true },
      status: {
        type: String,
        enum: ["PENDING", "SUCCESS", "FAILED"],
        default: "PENDING",
      },
    },
    paymentDate: { type: Date, default: Date.now },
    orderDate: { type: Date, default: Date.now },
    deliveryDate: { type: Date },
    deliveryStatus: { type: String, default: "PENDING", enum: statuses },
    deliveryAddress: { type: Schema.Types.ObjectId, ref: "Address" },
  },
  { timestamps: true, versionKey: false }
);

module.exports = orderSchema;
