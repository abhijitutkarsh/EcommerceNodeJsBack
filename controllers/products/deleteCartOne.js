const deleteProductService = require("../../services/products/deleteProduct");
const cartModel = require("../../database/models/cart")


module.exports = async function(req, res)
{

	const productId = req.body.cartId;
  // console.log(productId)
    try{
   const data= await cartModel.findOneAndRemove({cartId: productId});
      res.json(data)
    }
    catch(err)
    {
            console.log(err)
    }

}