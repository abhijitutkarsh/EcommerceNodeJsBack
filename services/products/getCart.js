const cartModel = require("../../database/models/cart")

module.exports = async function(user)
{
   
  
    // get records to skip
    // var startFrom = parseInt(i);
    // return new Promise(async function(resolve, reject)
    // {
        // console.log(i);
    //    return await cartModel.count();
      return  await cartModel.find({username : user}).count();
       
  
}