const addToCart = require("../../services/products/cart");
const getAllProducts = require("../../services/products/getAllProducts");
const getCart = require("../../services/products/getCart");

module.exports = async function(req, res)
{
   
    const u = req.body.cartId;
    // const username = req.session.user.username;

// console.log(user)
    // const user = req.session.user;
    const email = req.body.email;
// console.log(email);
const body = {
    email:email,
    cartId : u
}   
try{
    // console.log(body)
    const data = await addToCart(body);
    // const data1 = await getAllProducts();
    // const data3 = await getCart(body);

    
    res.json("done");
   }
   catch(err){
    res.json("Error here")
   }
}