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
  <html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

<a href="https://ecommerce370000.herokuapp.com/validateEmail/${updatedUser.id}">Click to Verify</a>
</body>
</html>
   )
// console.log(result)
   return;

}