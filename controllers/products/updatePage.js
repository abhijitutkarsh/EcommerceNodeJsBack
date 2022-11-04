const updatePageService = require("../../services/products/updatePage");


module.exports = async function(req, res)
{

	const userId = req.params.userId

    try{
        // console.log(user)
      const data =  await updatePageService(userId);
       res.render("update", {id: userId });
    }
    catch(err)
    {
        // console.log(err)
        res.json(err);
    }

}