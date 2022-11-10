// const cartPage = require("../../services/products/cartPage");
// const allCartData = require("../../services/products/getCart");
const cartModel = require("../../database/models/cart")
const ProductModel = require("../../database/models/products")


module.exports = async function (req, res) {

   
    const user = req.body.email;
    // const username = req.session.user.username;
    //    console.log(user)
  
    

        try {
       const data = await cartModel.find({email: user})
    //    console.log(data)
       var a = [] ; 
            var i =0;
            for(var i = 0 ; i<data.length ; i++)
            {
                a[i] = (await ProductModel.findOne({_id: data[i].cartId}))
            }
    //    const data1 = await ProductModel.find({_id: data.cartId})
    //    console.log(a[0])
   

    // const count = [];
    
    // for (const element of a) {
    //   if (count[element[0]._id]) {
    //     count[element[0]._id] += 1;
    //   } else {
    //     count[element[0]._id] = 1;
    //   }
    // }
    // const countOccur = function(arr,val) {
    //     return arr.reduce((acc,elem)=>{
    //         return (val === elem ?acc+1:acc)
    //     },0);
    // };
    // console.log(countOccur(a))
    
   
    // console.log(a);
    // return count;
    

        res.json(a)
    // }else{
    //         console.log( data4);
    // }
        }
        catch (err) {
            console.log(err)
            res.json('error on cartPage')
        }
    
}