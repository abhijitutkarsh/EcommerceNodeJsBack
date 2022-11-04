const addToCart = require("../../services/products/cart");
const getAllProducts = require("../../services/products/getAllProducts");
const getCart = require("../../services/products/getCart");

module.exports = async function(req, res)
{
   
    const u = req.body.cartId;
    // const username = req.session.user.username;

// console.log(user)
    const user = req.session.user;
    const username = req.session.user.username;
// console.log(username);
const body = {
    user: user,
    username:username,
    cartId : u
}   

   try{
    const data = await addToCart(body);
    const data1 = await getAllProducts();
    const data3 = await getCart(body);

    // console.log(data.cartId)

    // res.render("home", {cart : data3 , products: data1 ,username: username, user: user});
    
    // res.render("myCart", {data3: data3, cart:data4.length,product: data4});
    res.json(data3);
   }
   catch(err){
    res.json("Error here")
   }
}