const fetchProducts = require("../../services/products/fetchProducts");

module.exports = async function(req, res)
{
    // if(!req.session.isLoggedIn)
    // {
    //     res.redirect("/login");
    //     return;
    // }

    // const user = req.session.user;
    // const username = req.session.user.username;
   try{
    const data = await fetchProducts();
    // const data1 = await getAllProducts();
    // console.log(data)
    res.json(data);
   }
   catch(err){
    res.json("Error here")
   }
}