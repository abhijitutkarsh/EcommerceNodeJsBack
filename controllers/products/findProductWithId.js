// const getAllProducts = require("../../services/products/getAllProducts");
const ProductModel = require("../../database/models/products")

module.exports = async function(req, res)
{
    // if(!req.session.isVerified)
    // {
    //     res.redirect("/login")
    // }
    

    const body = {
    id: req.body.productId
}   
console.log(body.id)
    
// console.log(user)

   try{
    const data = await ProductModel.find({_id: body.id})

    res.json(data)
    
   }
   catch(err){
    res.json("Error on getProduct")
   }
}