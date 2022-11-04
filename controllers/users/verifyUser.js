const verifyUserService = require("../../services/user/verifyUser");


module.exports = async function(req, res)
{

	const userId = req.params.userId

    try{
        // console.log(user)
       await verifyUserService(userId);
       res.redirect("/login");
    }
    catch(err)
    {
        // console.log(err)
        res.json(err);
    }

} 