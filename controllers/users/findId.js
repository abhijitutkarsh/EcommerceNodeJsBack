const findIdService = require("../../services/user/findId");


module.exports = async function(req, res)
{

	const user = {
		
        email: req.body.email,
		
        // isVerified: 
	}		
// console.log(req.body.email);
    try{
       await findIdService(user);
       res.redirect("/login");
    }
    catch(err)
    {
            console.log(err)
    }

}