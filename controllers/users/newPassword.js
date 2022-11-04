const newPasswordService = require("../../services/user/newPassword");


module.exports = async function(req, res)
{

	// const userId = req.params.userId
    const user = {
		userId : req.params.userId,
		password: req.body.password
        // isVerified: 
	}		

    if(req.body.password != req.body.Cpassword)
    {
        res.end("password not same")
        return;
    }
    // console.log(userId)
    try{
       await newPasswordService(user);
    //    alert("password Changed")
    res.redirect("/login");
}
    catch(err)
    {
    //     // console.log(err)
        res.json(err);
    }

}