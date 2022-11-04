const ProductModel = require("../../database/models/products")

module.exports = async function(id)
{
   
  
    // get records to skip
    // var startFrom = parseInt(i);
    // return new Promise(async function(resolve, reject)
    // {
        // console.log(i);
    //    return await cartModel.count();
      const prod =   await ProductModel.findByIdAndDelete({_id : id});
      // console.log(prod)
      return
       
  
}