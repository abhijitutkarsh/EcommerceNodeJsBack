const UserModel = require("../../database/models/users")
const mail = require("../../utils/sendMail") 

module.exports =async function(user)
{
//    const updatedUser =  await UserModel.create(user);
  const u = await UserModel.findOne({email : user.email});
    // console.log(u)
const result = await mail.sendMail([
  {
    Email: user.email,
    Name: "Reset",
  }], 
  "Reset your password",
   `<h1>Reset your account password</h1>
   <a href="https://ecommerce2-3p34g89v3jl99zxqmu.codequotient.in/forgot/${u._id}">Click to Verify</a>
   `)
// console.log(result)
   return;

}