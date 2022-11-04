const express = require("express")
var cors = require('cors')
const fs = require("fs")
const session = require('express-session')
// const multer  = require('multer')

const userModel = require("./database/models/users")
const cartModel = require("./database/models/cart")


const MailService = require("./utils/sendMail.js");


const startDb = require("./database/init");


const app = express();
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) )

// app.use(cors({origin:'http://localhost:3001', credentials : true}));
app.use(cors())
// app.use((req, res, next) => { res.header({"Access-Control-Allow-Origin": "*"}); next(); })
app.use(session({
	secret: 'keyboard cat',
	  resave: false,
	saveUninitialized: true,
	cookie: { secure: false }
	  
  }))
  

//   app.use((req,res,next)=>{
//     console.log(req.session)
//     next();
//   })
startDb(); 
const fetchProductsControllers = require("./controllers/products/fetchProducts");
const moreProductsControllers = require("./controllers/products/moreProducts");
const createUserControllers =require("./controllers/users/createUser")

app.route('/').get((req,res)=>{
    res.json("hello")
})



app.route("/product")
.get(fetchProductsControllers)
.post(moreProductsControllers)

app.route("/signup")
.post(createUserControllers)

app.get("/logout", function(req, res)
{
	req.session.destroy();
	res.redirect("/");
})



app.route("/login").get((req,res)=> console.log(req.session))
.post(function(req, res)
{
	getUser(req.body.email,req.body.password,function(err, user )
	{

		if(user.length)
		{
			req.session.isLoggedIn = true;

			req.session.name = user[0].firstname;
			req.session.user = user[0];
			
console.log(req.session)

            res.json(req.session);
		}
		else
		{
			res.json(err);

		}
	});

});
function getUser(username, password, callback)
{
	userModel.find({email: username , password: password})
	.then(function(data){
        // console.log(data)
		callback(null,data)
	})
	.catch(function(err){
		callback("user not found")
	})
}

app.route('/session').get((req,res)=>
{
    console.log(req.session);
    res.json(req.session)
})


app.listen(process.env.PORT || 3001, '0.0.0.0', function()
{
	console.log("server is live")
})
