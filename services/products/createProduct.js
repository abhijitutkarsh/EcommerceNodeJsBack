const ProductModel = require("../../database/models/products")
// const mail = require("../../utils/sendMail") 

module.exports =async function(product)
{
   const updatedProduct =  await ProductModel.create(product);


// console.log(result)
   return;

}