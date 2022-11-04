const getAllProducts = require("../../services/products/getAllProducts");

module.exports = async function(req, res)
{
    // if(!req.session.isLoggedIn)
    // {
    //     res.redirect("http://localhost:3001/login");
    //     return;
    // }

    // const user = req.session.user;
    // const username = req.session.user.username;
    // var limit = 5;
  
    // get records to skip
    var startFrom = req.body.text;
    // console.log(startFrom)

   try{
    const data = await getAllProducts(startFrom);
//     if(data.length == 0) 
//     {console.log("data khatam");
//    }
//     else
//     {
        // console.log(data);
        res.json(data);
//     }

   }
   catch(err){
    res.json("Error here")
   }
}