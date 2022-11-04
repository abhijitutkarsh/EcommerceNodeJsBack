const UserModel = require("../../database/models/users")

module.exports = async function(userId)
{
  const user = await UserModel.findOne({_id : userId});

//   console.log(user)
  if(user)
  {
//    await UserModel.updateOne({_id: userId}, {isVerified: true})
    return;
  }
  else{
    throw new Error("user not found");
  }

}