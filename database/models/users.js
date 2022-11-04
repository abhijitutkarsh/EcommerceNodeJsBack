const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  admin: Boolean,
  isVerified: {
    type: Boolean,
    default:false
  }
});

const userModel = new mongoose.model("user", userSchema);

module.exports = userModel;