const cartModel = require("../../database/models/cart")

module.exports = async function(user)
{
    // var limit = 5;
  
    // get records to skip
    // var startFrom = parseInt(i);
    // return new Promise(async function(resolve, reject)
    // {
        // console.log(i);
        // if(user.isLoggedIn)
       const a =  await cartModel.find({username : user})
       
       console.log(a)
      return a;
      }
    //    	if (user.isLoggedIn) {
		

	// 		const userTodos =await cartModel.filter(function (todo) {
	// 			return todo.createdBy === user.username
	// 		})
	// 		// console.log(req.session.user);
			
		
	// }
	// else {
	// 	res.redirect("/login")
	// }
  
