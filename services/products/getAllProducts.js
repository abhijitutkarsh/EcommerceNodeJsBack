const ProductModel = require("../../database/models/products")

module.exports = async function(i)
{
    var limit = 5;
  
    // get records to skip
    var startFrom = parseInt(i);
    // return new Promise(async function(resolve, reject)
    // {
        // console.log(i);
       return await ProductModel.find({}).skip(startFrom)
       .limit(limit)
       
  
}