// const getAllProducts = require("../../services/products/getAllProducts");
const ProductModel = require("../../database/models/products")

module.exports = async function(req, res)
{
    // if(!req.session.isVerified)
    // {
    //     res.redirect("/login")
    // }
    

   const id =  req.body.productId

    
console.log(id)

   try{
    const data = await ProductModel.find({_id: id})

    res.json(data)
    
   }
   catch(err){
    res.json("Error on getProduct")
   }
}