const express = require("express");
var cors = require("cors");
const fs = require("fs");

const session = require("express-session");
// const multer  = require('multer')
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const userModel = require("./database/models/users");
const cartModel = require("./database/models/cart");

const MailService = require("./utils/sendMail.js");

const startDb = require("./database/init");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(cors({origin:'http://localhost:3001', credentials : true}));
app.use(
  cors({
    origin: ["https://ecommerce370001.herokuapp.com"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
// app.set('trust proxy')
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Origin", req.headers.origin);
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
//   );
//   next();
// });
app.use(
  session({
    key: "userId",
	// proxy: true,
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

startDb();
const fetchProductsControllers = require("./controllers/products/fetchProducts");
const moreProductsControllers = require("./controllers/products/moreProducts");
const createUserControllers = require("./controllers/users/createUser");
const addToCartControllers = require("./controllers/products/cart");
const cartCountControllers = require("./controllers/products/cartCount");
const cartDataControllers = require("./controllers/products/cartData");
const deleteCartDataControllers = require("./controllers/products/deleteCartOne");

app.route("/").get((req, res) => {
  res.json("hello");
});

app.route("/deletecart").post(deleteCartDataControllers);

app.route("/cart").post(addToCartControllers);

app.route("/cartCount").post(cartCountControllers);

app.route("/cartdata").post(cartDataControllers);

app
  .route("/product")
  .get(fetchProductsControllers)
  .post(moreProductsControllers);

app.route("/signup").post(createUserControllers);

app.get("/logout", function (req, res) {
  console.log("destroyed");
  req.session.destroy();
  res.json("loggedOut");
});

app
  .route("/login")
  .get((req, res) => {
    console.log(req.session);
    if (req.session.isLoggedIn)
      res.send({ isLoggedIn: true, user: req.session.user });
    else res.send({ isLoggedIn: false });

    // console.log(req.session)
  })

  .post(function (req, res) {
    getUser(req.body.email, req.body.password, function (err, user) {
      if (user.length) {
        req.session.isLoggedIn = true;

        // req.session.name = user[0].firstname;
        req.session.user = user[0];

        console.log(req.session);

        res.json(req.session);
      } else {
        res.json(err);
      }
    });
  });
function getUser(username, password, callback) {
  userModel
    .find({ email: username, password: password })
    .then(function (data) {
      // console.log(data)
      callback(null, data);
    })
    .catch(function (err) {
      callback("user not found");
    });
}

app.route("/session").get((req, res) => {
  console.log(req.session);
  res.json(req.session);
});

app.listen(process.env.PORT || 3001, "0.0.0.0", function () {
  console.log("server is live");
});
