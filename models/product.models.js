const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    require: true,
  },
  brandName: {
    type: String,
  },
  color: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  price:{
      type: Number
  }
});

const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;