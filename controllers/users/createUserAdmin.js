const createUserService = require("../../services/user/createUser");


module.exports = async function(req, res)
{

	const user = {
		username: req.body.username,
		password: req.body.password,
        email: req.body.email,
		profile_pic: req.file.filename,
         admin: true
        // isVerified: 
	}		

    try{
       await createUserService(user);
       res.redirect("/login");
    }
    catch(err)
    {
            console.log(err)
    }

}