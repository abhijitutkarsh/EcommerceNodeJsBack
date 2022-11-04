const UserModel = require("../../database/models/users")
const mail = require("../../utils/sendMail") 

module.exports =async function(user)
{
   const updatedUser =  await UserModel.create(user);

const result = await mail.sendMail([
  {
    Email: user.email,
    Name: user.username,
  }], 
  "Verify your account",
   `<h1>Verify yourself sir/ma'am</h1>
   <a href="https://ecommerce4-3p34g89v3jl9kvkohg.codequotient.in/validateEmail/${updatedUser.id}">Click to Verify</a>
   `)
// console.log(result)
   return;

}