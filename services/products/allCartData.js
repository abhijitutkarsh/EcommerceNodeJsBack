const productModel = require("../../database/models/products")

module.exports = async function(data)
{
    // var limit = 5;
  
    // get records to skip
    // var startFrom = parseInt(i);
    // return new Promise(async function(resolve, reject)
    // {
        console.log(data);
        var b;
        var a=[]
         var i = 0;
     for(var i =0 ; i<data.length ; i++){


        b= await productModel.findOne({_id:data[i].cartId, username:data[i].username})

        a.push(b)
    
      
      }
    //   console.log(a)
return a;
      //  const a =  await cartModel.find({})
    //   return a;
       
  
}