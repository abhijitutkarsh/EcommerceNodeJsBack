const finalUpdateProductService = require("../../services/products/finalUpdateProduct");


module.exports = async function(req, res)
{

	// const userId = req.params.userId
// console.log(userId+"yeah")
const userId = {
        id: req.params.userId,
		name: req.body.name,
		description: req.body.description,
        price: req.body.price,
		image: req.file.filename,
        quantity: req.body.quantity
        // isVerified: 
	}	

// res.end()
    try{
        // console.log(user)
      const data =  await finalUpdateProductService(userId);
      console.log(data)
      //  res.render("update", {id: userId ,name : data.name, description : data.description,  image: data.image, price: data.price, quantity: data.quantity});
      res.redirect("/updateProduct")
    }
    catch(err)
    {
        // console.log(err)
        res.json(err);
    }

}