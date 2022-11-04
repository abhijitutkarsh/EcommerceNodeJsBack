const productModel = require("../../database/models/products")

module.exports = async function(user)
{
  const u = await productModel.findOne({_id : user.id});

  // console.log(u)
  // return;
  if(u)
  {
   await productModel.findByIdAndUpdate({_id: user.id}, {name: user.name, description: user.description, image: user.image, quantity: user.quantity, price: user.price})
   
    return;
  }
  else{
    throw new Error("user not found");
  }

}