const getAllProducts = require("../../services/products/getAllProducts");
const getCart = require("../../services/products/getCart");
const fetchProducts = require("../../services/products/fetchProducts");

module.exports = async function(req, res)
{
    // if(!req.session.isVerified)
    // {
    //     res.redirect("/login")
    // }
    if(!req.session.isLoggedIn)
    {
        console.log(req.session.isLoggedIn)
        res.redirect("/login");
        return;
    }
        console.log(req.session.isLoggedIn)

    const u = req.body.cartId;

    const body = {
    cartId : u
}   

    const user = req.session.user;
    const username = req.session.user.username;
// console.log(user)

   try{
    const data = await fetchProducts();
    // console.log(data1)
    // const data = await getAllProducts();
    res.render("updateProduct", {products: data ,username: username, user: user});
    
   }
   catch(err){
    res.json("Error on getAllProduct")
   }
}