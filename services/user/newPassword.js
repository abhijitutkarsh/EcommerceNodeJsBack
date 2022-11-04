const UserModel = require("../../database/models/users")

module.exports = async function(user)
{
  const u = await UserModel.findOne({_id : user.userId});

//   console.log(user)
  
  if(u)
  {
   await UserModel.updateOne({_id: user.userId}, {password: user.password})
   
    return;
  }
  else{
    throw new Error("user not found");
  }

}