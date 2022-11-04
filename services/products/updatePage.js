const productsModel = require("../../database/models/products")

module.exports = async function(user)
{
   
  
    // get records to skip
    // var startFrom = parseInt(i);
    // return new Promise(async function(resolve, reject)
    // {
        // console.log(i);
    //    return await cartModel.count();
      return  await productsModel.find({_id : user});
       
  
}