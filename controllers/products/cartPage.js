const cartPage = require("../../services/products/cartPage");
const allCartData = require("../../services/products/allCartData");
const cartModel = require("../../database/models/cart")

module.exports = async function (req, res) {

    //  if(!req.session.isLoggedIn)
    // {
    //     res.redirect("/login");
    //     return;
    // }
    const user = req.session.user.username;
    // const username = req.session.user.username;
    //    console.log(user)
  
    

        try {

            const data3 = await cartPage(user);
            console.log(data3)

            // async ()=>{

            const data4 = await allCartData(data3);
            // }
            // res.render("myCart", {cart : data3 , products: data1 ,username: username, user: user});
            // res.render("myCart");
            // console.log(data4)
            // console.log(data4.length);
              if (await cartModel.find({ username: user }).count() == 0) {
        console.log(await cartModel.find({ username: req.session.username }).count())
        // res.render("nothing",{username: user, cart: data4.length})
        res.json(data4)
    }else{
            // res.end();
            console.log( data4);
            res.render("myCart", { data3: data3, cart: data4.length, product: data4 });
    }
        }
        catch (err) {
            console.log(err)
            res.json('error on cartPage')
        }
    
}