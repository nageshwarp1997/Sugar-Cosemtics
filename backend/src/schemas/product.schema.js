const { Schema } = require("mongoose");

const productSchema = new Schema(
    {
        title: { type: String, required: true },
        brand: { type: String, required: true },
        originalPrice: { type: Number, required: true },
        sellingPrice: { type: Number, required: true },
        category: { type: Schema.Types.ObjectId, ref: "Category" },

    },
  {
    timestamps: true,
    versionKey: false,
  }
);
