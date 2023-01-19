const createUserService = require("../../services/user/createUser");


module.exports = async function(req, res)
{

	const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
		password: req.body.password,
        admin: false
        // isVerified: 
	}		

    try{
       await createUserService(user);
    //    console.log("done")
        // res.json("");
    }
    catch(err)
    {
            console.log(err)
    }

}