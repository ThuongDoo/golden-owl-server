const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
    },
    name: String,
    image: String,
    description: String,
    price: Number,
    color: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
