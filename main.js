const express = require("express")
var cors = require('cors')


const app = express();
app.use(cors());

// startDb(); 


app.route('/').get((req,res)=>{
    res.json("hello")
})

app.listen(process.env.PORT || 3001, '0.0.0.0', function()
{
	console.log("server is live")
})
