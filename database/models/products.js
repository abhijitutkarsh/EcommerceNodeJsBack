const mongoose = require('mongoose');
const { Schema } = mongoose;

const productsSchema = new Schema({
  name: String,
  description: String,
  image: String,
  price: Number,
  quantity: Number

});

const ProductsModel = new mongoose.model("products", productsSchema);

module.exports = ProductsModel;

