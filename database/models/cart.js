const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartsSchema = new Schema({
  user: String,
  username:String,
  cartId: String
});

const cartsModel = new mongoose.model("cart", cartsSchema);

module.exports = cartsModel;

