import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
    },
    price: {
      type: String,
      required: [true, "Product price is required"],
    },
    dealer: String,
  },
  { timestamps: true }
);

const Product = mongoose.model("product", productSchema);

export default Product;
