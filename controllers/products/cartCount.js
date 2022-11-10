const cartPage = require("../../services/products/cartPage");
const allCartData = require("../../services/products/getCart");
const cartModel = require("../../database/models/cart")

module.exports = async function (req, res) {

   
    const user = req.body.email;
    // const username = req.session.user.username;
       console.log(user)
  
    

        try {

            // const data3 = await cartPage(user);
    //         console.log(data3)


            // const data4 = await allCartData(data3);
           
    //           if (await cartModel.find({ email: user }).count() == 0) {
       const data = await cartModel.find({email: user}).count()
        res.json(data)
    // }else{
    //         console.log( data4);
    // }
        }
        catch (err) {
            console.log(err)
            res.json('error on cartPage')
        }
    
}