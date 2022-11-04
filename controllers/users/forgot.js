const forgotService = require("../../services/user/forgot");


module.exports = async function(req, res)
{

	const userId = req.params.userId

    // console.log(userId)
    try{
       await forgotService(userId);
       res.render("forgot", {url : userId});
    }
    catch(err)
    {
    //     // console.log(err)
        res.json(err);
    }

}