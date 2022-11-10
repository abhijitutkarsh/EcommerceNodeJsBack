const cartModel = require("../../database/models/cart")

module.exports = async function(id)
{
    // var limit = 5;
  
    // get records to skip
    // var startFrom = parseInt(i);
    // return new Promise(async function(resolve, reject)
    // {
        // console.log(i);
  //  const updatedUser =  await UserModel.create(user);
      
       console.log(id);
     const updatedCart =  await cartModel.create(id);

  // console.log(updatedCart);
  return ;
}