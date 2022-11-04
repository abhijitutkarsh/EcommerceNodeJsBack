const createProductService = require("../../services/products/createProduct");


module.exports = async function(req, res)
{

	const product = {
        name: req.body.name,
  description: req.body.description,
  image: req.file.filename,
  price: req.body.price,
  quantity: req.body.quantity
	}		
// console.log(req.session.user)
 

    try{
       await createProductService(product);
       res.redirect("/addProduct");
    }
    catch(err)
    {
            console.log(err)
    }

}