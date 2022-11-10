const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartsSchema = new Schema({
  email:String,
  cartId: String
});

const cartsModel = new mongoose.model("cart", cartsSchema);

module.exports = cartsModel;

