const cartModel = require("../../database/models/cart")

module.exports = async function(id)
{
   
  
    // get records to skip
    // var startFrom = parseInt(i);
    // return new Promise(async function(resolve, reject)
    // {
        // console.log(i);
    //    return await cartModel.count();
   await cartModel.findByIdAndRemove({_id: id}, function(err,data)
    {
        if(!err){
            console.log("Deleted");
        }
    });
    //   console.log(id+ 'hello')
      return
       
  
}