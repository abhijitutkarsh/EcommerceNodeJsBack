const deleteProductService = require("../../services/products/deleteProduct");


module.exports = async function(req, res)
{

	const productId = req.body.id;
  console.log(productId)
    try{
       await deleteProductService(productId);
       res.json("deleted");
    }
    catch(err)
    {
            console.log(err)
    }

}